import express from "express";
import Ctrl from "./controller";
import paramValidation from "../validator";
import { adminAuthentication } from "../../middleware";

const authRouter = express.Router();
const userRouter = express.Router();

/** *******Auth Router */
authRouter.post("/login", paramValidation.admin.validateLogIn, Ctrl.login);

userRouter.get(
  "/profile",
  adminAuthentication,
  (req, res, next) => {
    req.params.id = req.user._id;
    next();
  },
  paramValidation.admin.validateUpdate,
  Ctrl.show
);

export { authRouter, userRouter };
