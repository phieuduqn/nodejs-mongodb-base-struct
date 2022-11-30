import service from "./service";
import to from "../../utils/to";
import { handleResponse } from "../../utils/handle-response";

const show = async (req, res) => {
  const [error, data] = await to(service.show());
  handleResponse(error, data, req, res);
};

const update = async (req, res) => {
  req.body.updatedBy = req.user;
  const [error, data] = await to(service.update(req.body));
  handleResponse(error, data, req, res);
};

export default {
  show,
  update,
};
