import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

class Middleware {
  handleValidationError(req, res, next) {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json(error.array()[0]);
    }
    next();
  }
}
export default new Middleware();
