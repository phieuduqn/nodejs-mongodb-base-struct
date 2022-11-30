import lodash from "lodash";

async function commonUserData(user) {
  return lodash.pick(user, [
    "_id",
    "username",
    "fullName",
    "phone",
    "email",
    "avatar",
    "blocked",
    "gender",
    "createdAt",
    "updatedAt",
    "createdBy",
    "role",
  ]);
}

export default {
  commonUserData,
};
