import tokenGenerator from "./token-generator";
import config from "../configs";

const genTokenObject = (id, email) => {
  const result = {};
  result.accessToken = tokenGenerator.generate(
    { id, email },
    { expiresIn: config.accessTokenLifeTime }
  );
  result.refreshToken = tokenGenerator.generate(
    { id, email },
    { expiresIn: config.refreshTokenLifeTime }
  );
  return result;
};

const genAdminTokenObject = (id, username) => {
  const result = {};
  result.accessToken = tokenGenerator.generate(
    { id, username },
    { expiresIn: config.accessTokenLifeTime }
  );
  result.refreshToken = tokenGenerator.generate(
    { id, username },
    { expiresIn: config.refreshTokenLifeTime }
  );
  return result;
};

module.exports = {
  genTokenObject,
  genAdminTokenObject,
};
