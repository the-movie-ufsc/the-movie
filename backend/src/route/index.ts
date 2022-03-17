import express from "express";
import RequisitionController from "../controller";
import RequisitionValidator from "../validator/Request";
import Middleware from "../../middleware";

const router = express.Router();

router.post(
  "/update",
  RequisitionValidator.checkUpdateUser(),
  Middleware.handleValidationError,
  RequisitionController.create
);

router.get("/read", RequisitionController.readAll);
router.get("/readlast/user/:id", RequisitionController.readLastUser);

router.get("/read/user/:id", RequisitionController.readByUserId);

export default router;
