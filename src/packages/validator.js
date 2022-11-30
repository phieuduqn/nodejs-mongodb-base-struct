/* eslint-disable no-unused-vars */
import validate from "express-validation";
import * as systemSetting from "./settings/validation";
import * as admin from "./admin/validation";

function parse(object) {
  const data = {};
  for (const key of Object.keys(object)) {
    data[key] = validate(object[key]);
  }

  return data;
}

export default {
  systemSetting: parse(systemSetting),
  admin: parse(admin),
};
