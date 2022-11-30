import { verify } from "jsonwebtoken";
import config from "../configs";
import { commonLocale, validationLocale } from "../locales";
import adminRepo from "../packages/admin/repository";
import { handleResponse } from "../utils/handle-response";

const authentication = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    await verify(token.split(" ")[1], config.secret, async (error, decoded) => {
      if (error) {
        return handleResponse(commonLocale.tokenVerifyFailed, null, req, res);
      }
      if (typeof decoded === "string") {
        decoded = JSON.parse(decodeURIComponent(decoded));
      }
      if (typeof decoded.id === "undefined") {
        return handleResponse(commonLocale.noToken, null, req, res);
      }
      const user = await adminRepo.findById(decoded.id);
      if (!user) {
        return handleResponse(commonLocale.tokenVerifyFailed, null, req, res);
      }
      if (user.blocked) {
        return handleResponse(
          validationLocale.user.accountBlocked,
          null,
          req,
          res
        );
      }
      if (
        (user.timeVersion && !decoded.timeVersion) ||
        (user.timeVersion && user.timeVersion > decoded.timeVersion)
      ) {
        return handleResponse(commonLocale.tokenVerifyFailed, null, req, res);
      }
      req.user = user;

      next();
    });
  } else {
    return handleResponse(commonLocale.noToken, null, req, res);
  }
};

export default authentication;
