import { Schema } from "../../utils/mongoose";
import config from "./config";

const translations = config.languageList.reduce((acc, curr) => {
  acc[curr] = Schema.Types.Mixed;
  return acc;
}, {});

export default translations;
