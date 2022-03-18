import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { Op } from "sequelize";
import { compare } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { UserInstance } from "../model";

function removePassword(object: any): object {
  const response = {
    id: object["dataValues"].id,
    name: object["dataValues"].name,
    email: object["dataValues"].email,
  };
  return response;
}

async function confirmPass(object: any, password: string): Promise<Boolean> {
  return compare(password, object["dataValues"].password);
}

class UserController {
  async create(req: Request, res: Response) {
    const id = uuidv4();

    try {
      const { name, email, password } = req.body;
      // validar email
      const userRegister = await UserInstance.findAll({ where: { email } });
      if (userRegister.length)
        return res.status(409).json({ status: "Conflict Error", msg: "Email already exists" });

      const hashedPassword = await hash(password, 8);

      const user = (await UserInstance.create({
        id,
        name,
        email,
        password: hashedPassword,
      })) as any;

      let response = removePassword(user);

      return res.status(201).json({ response });
    } catch (e) {
      return res.status(500).json({ status: "Request Error", msg: "Unexpected internal error" });
    }
  }

  async getUserByEmail(req: Request, res: Response) {
    try {
      const email = req.params.id;
      const user = await UserInstance.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ status: "User Error", msg: "User not found by email" });
      }

      let response = removePassword(user);

      return res.status(200).json(response);
    } catch (e) {
      return res.status(500).json({ status: "Request Error", msg: "Unexpected internal error" });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = await UserInstance.findOne({ where: { id } });

      user?.setDataValue("name", "lorem");
      return res.status(200).json({ status: "ok" });
    } catch (e) {
      return res.status(500).json({ status: "Request Error", msg: "Unexpected internal error" });
    }
  }

  async getUserByEmailAndPass(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // get user by email
      const user = await UserInstance.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ status: "Email Error", msg: "User not found by email" });
      }

      // verify password of user
      if (!(await confirmPass(user, password))) {
        return res.status(410).json({ status: "Password Error", msg: "Password is Invalid" });
      }

      let response = removePassword(user);
      return res.status(200).json({ user: { ...response } });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ status: "Request Error", msg: "Unexpected internal error" });
    }
  }
}

export default new UserController();
