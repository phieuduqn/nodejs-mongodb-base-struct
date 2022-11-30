import { pick } from "lodash";
import service from "./service";
import to from "../../utils/to";
import errorUtil from "../../utils/error";
import { handleResponse } from "../../utils/handle-response";

const login = async (req, res) => {
  const data = pick(req.body, ["username", "password"]);
  const [error, result] = await to(service.login(data));
  handleResponse(errorUtil.parseError(error), result, req, res);
};

const show = async (req, res) => {
  const [error, data] = await to(service.show(req.params.id));
  handleResponse(error, data, req, res);
};

export default {
  login,
  show,
};
