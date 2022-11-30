import { Router } from "express";
import cmsRoutes from "./routes/cms";
import webRoutes from "./routes/app";

export default () => {
  const api = Router();

  api.use("/api/v1/", webRoutes);
  api.use("/api/v1/cms", cmsRoutes);
  return api;
};
