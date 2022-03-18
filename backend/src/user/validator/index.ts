import { body } from "express-validator";

class RequisitionValidator {
  checkCreateUser() {
    return [
      body("name").notEmpty().withMessage("Name is Required"),
      body("email").isEmail().notEmpty().withMessage("Email is Required"),
      body("password").notEmpty().withMessage("Password is Required"),
    ];
  }

  checkLogUser() {
    return [
      body("email").notEmpty().withMessage("Email is Required"),
      body("password").notEmpty().withMessage("Password is Required"),
    ];
  }
}

export default new RequisitionValidator();
