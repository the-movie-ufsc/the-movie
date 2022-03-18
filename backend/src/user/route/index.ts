import express from "express";
import UserController from "../controller";
import UserValidator from "../validator";
import Middleware from "../../middleware";

const router = express.Router();

// create user
router.post(
  "/user",
  UserValidator.checkCreateUser(),
  Middleware.handleValidationError,
  UserController.create
);

// user by email
router.get("/user/:id", Middleware.handleValidationError, UserController.getUserByEmail);

// login
router.post(
  "/login",
  UserValidator.checkLogUser(),
  Middleware.handleValidationError,
  UserController.getUserByEmailAndPass
);

// update info
router.put(
  "/user/:id",
  // UserValidator.checkLogUser(),
  Middleware.handleValidationError,
  UserController.updateUser
);

export default router;
