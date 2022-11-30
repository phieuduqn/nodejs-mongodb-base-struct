/* eslint-disable no-unused-vars */
import { SiteAdmin } from "../../models";
import { queryBuilderGetList } from "./queryBuilder";
import { ObjectId } from "../../utils/mongoose";
import { listInitOptions } from "../../utils/paginate";

const create = async (data) => {
  const siteAdmin = await SiteAdmin.create(data);
  return SiteAdmin.commonUserData(siteAdmin);
};

const findAll = async (request) => {
  const query = queryBuilderGetList(request);
  const option = listInitOptions(request);
  if (request.select) {
    option.select = request.select;
  }

  return SiteAdmin.paginate(query, option);
};

async function destroy(id) {
  return SiteAdmin.deleteOne({ _id: new ObjectId(id) });
}

async function findOne(query) {
  return SiteAdmin.findOne(query).lean();
}

async function updateOne(id, data) {
  return SiteAdmin.findOneAndUpdate({ _id: new ObjectId(id) }, data, {
    new: true,
  })
    .select("-password")
    .lean();
}

async function checkExist(username) {
  return SiteAdmin.findOne({ username: username.toLowerCase().trim() }).lean();
}

/**
 * @param {*} isFullFields Boolean
 */
async function findById(id, isFullFields) {
  if (isFullFields) {
    return SiteAdmin.findById(new ObjectId(id)).lean();
  } else {
    return SiteAdmin.findById(new ObjectId(id)).select("-password").lean();
  }
}

async function findByQuery(query) {
  return SiteAdmin.find(query);
}

export default {
  create,
  destroy,
  findOne,
  checkExist,
  findById,
  updateOne,
  findAll,
  findByQuery,
};
