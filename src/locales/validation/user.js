import { commonCode } from "../response-code";

export default {
  accountBlocked: {
    code: commonCode.badRequest,
    message: "user.accountBlocked",
  },
  existUser: {
    code: commonCode.badRequest,
    message: "user.existUser",
  },
  notExistUser: {
    code: commonCode.badRequest,
    message: "user.notExistUser",
  },
  passwordNotMatch: {
    code: commonCode.badRequest,
    message: "user.passwordNotMatch",
  },
};
