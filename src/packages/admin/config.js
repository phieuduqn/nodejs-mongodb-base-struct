const status = {
  active: 1,
  deactive: 0,
};

const ROLE = {
  ADMIN: "admin",
  SYSTEM: "system",
  EDITOR: "editor",
};

const ROLES = Object.values(ROLE);

const listStatus = [status.active, status.deactive];

const ALLOWED_ATTRIBUTE = [
  "avatar",
  "gender",
  "username",
  "password",
  "fullName",
  "email",
  "role",
  "roleId",
  "blocked",
];

const ALLOWED_UPDATE_ATTRIBUTE = [
  "avatar",
  "gender",
  "fullName",
  "email",
  "role",
  "roleId",
  "blocked",
];

const ALLOWED_ATTRIBUTE_PROFILE = ["avatar", "gender", "fullName", "email"];

const gender = {
  male: "male",
  female: "female",
  orther: "orther",
};
const listGender = Object.values(gender);

export default {
  status,
  listStatus,
  limit: {
    index: 20,
  },
  gender,
  listGender,
  ALLOWED_ATTRIBUTE,
  ALLOWED_UPDATE_ATTRIBUTE,
  ALLOWED_ATTRIBUTE_PROFILE,
  ROLE,
  ROLES,
};
