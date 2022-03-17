import express from "express";
import UserController from "../controller";
import UserValidator from "../validator";
import Middleware from "../../middleware";

const router = express.Router();

router.post(
  "/user",
  UserValidator.checkCreateUser(),
  Middleware.handleValidationError,
  UserController.create
);

export default router;
