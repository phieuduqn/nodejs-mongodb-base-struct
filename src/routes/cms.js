import { Router } from "express";
import authenticator from "../packages/system/authenticator";
import { userRouter, authRouter } from "../packages/admin/routeAdmin";

const api = Router();

api.use("*", authenticator);
api.use("/auth", authRouter);
api.use("/admin", userRouter);

export default api;
