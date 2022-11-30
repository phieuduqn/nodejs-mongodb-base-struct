/* eslint-disable no-unused-vars */
import express from "express";
import helper from "../../utils/helper";

const router = express.Router();
const numericFields = ["page", "sortType", "limit"];
router.use(async (req, res, next) => {
  // Cast all number in query data to number type instead of string
  for (const key in req.query) {
    if (numericFields.indexOf(key) !== -1) {
      req.query[key] = Number(req.query[key]);
    }
  }
  req.query = helper.clearEmptyOrNullQueryString(req.query);
  next();
});

export default router;
