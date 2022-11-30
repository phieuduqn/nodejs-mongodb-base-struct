import { Router } from "express";
import authenticator from "../packages/system/authenticator";
import settingRouter from "../packages/settings/route";

const api = Router();

api.use("*", authenticator);
api.use("/cfg", settingRouter);

export default api;
