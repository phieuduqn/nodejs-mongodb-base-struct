import express from "express";
import Ctrl from "./controller";

const router = express.Router();

router.get("/", Ctrl.show);

export default router;
