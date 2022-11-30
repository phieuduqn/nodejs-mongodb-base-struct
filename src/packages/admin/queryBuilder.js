import _ from "lodash";
import { ObjectId } from "../../utils/mongoose";

const queryBuilderGetList = (request = {}) => {
  let match = {};

  if (request.userId) {
    match = {
      $and: [
        {
          _id: { $ne: new ObjectId(request.userId) },
        },
      ],
    };
  }

  if (request._id) {
    match._id = new ObjectId(request._id);
  }

  if (request.status !== undefined) {
    match.status = parseInt(request.status, 10);
  }

  if (request.fullName !== undefined) {
    match.fullName = {
      $regex: new RegExp(request.fullName, "i"),
    };
  }

  if (request.email !== undefined) {
    match.email = {
      $regex: new RegExp(request.email, "i"),
    };
  }

  if (request.ignoreIds && request.ignoreIds.length > 0) {
    match._id = {
      $nin: [request.ignoreIds],
    };
  }

  if (request.role) {
    match.role = new ObjectId(request.role);
  }

  if (request.search) {
    const searchQuery = {
      $or: [
        { fullName: { $regex: new RegExp(request.search, "i") } },
        { email: { $regex: new RegExp(request.search, "i") } },
      ],
    };
    match = _.merge({}, match, searchQuery);
  }

  return match;
};

export { queryBuilderGetList };
