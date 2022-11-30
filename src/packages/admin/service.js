/* eslint-disable no-unused-vars */
import repo from "./repository";
import { genAdminTokenObject } from "../../utils/gen-token";
import { commonLocale, validationLocale } from "../../locales";
import method from "./method";
import to from "../../utils/to";

const login = async (data) => {
  const { username, password } = data;

  const siteAdmin = await repo.findOne({
    username: username.toLowerCase().trim(),
  });
  if (!siteAdmin) {
    throw new Error(JSON.stringify(commonLocale.loginFailed));
  }
  if (!method.comparePassword(password, siteAdmin.password)) {
    throw new Error(JSON.stringify(commonLocale.loginFailed));
  }
  if (siteAdmin.blocked) {
    throw new Error(JSON.stringify(validationLocale.user.accountBlocked));
  }
  const [error, updated] = await to(
    repo.updateOne(siteAdmin._id, {
      locale: data.locale,
      lastLogin: new Date().toISOString(),
    })
  );
  if (error) {
    throw new Error(JSON.stringify(commonLocale.loginFailed));
  }
  siteAdmin.password = undefined;

  return {
    ...siteAdmin,
    ...genAdminTokenObject(siteAdmin._id, username, Date.now()),
  };
};

const create = async (data) => {
  const exist = await repo.checkExist(data.username);
  if (exist) {
    throw new Error(JSON.stringify(commonLocale.dataAlreadyExisted));
  }

  return repo.create(data);
};

export default {
  login,
  create,
};
