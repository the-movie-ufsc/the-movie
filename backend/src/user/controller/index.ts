import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { UserInstance } from "../model";

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
      const record = await UserInstance.create({
        id,
        name,
        email,
        password: hashedPassword,
      });
      return res.status(201).json({ record });
    } catch (e) {
      return res.status(500).json({ status: "Request Error", msg: "Unexpected internal error" });
    }
  }

  async getUserByEmail(req: Request, res: Response) {
    try {
      const email = req.params.id;
      const records = await UserInstance.findAll({ where: { email } });
      return res.status(200).json(records);
    } catch (e) {
      return res.status(500).json({ status: "Request Error", msg: "Unexpected internal error" });
    }
  }
}

export default new UserController();
