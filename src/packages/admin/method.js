import bcrypt from "bcrypt";

function hashPassword(plainText, saltRounds = 7) {
  if (!plainText) return "";
  return bcrypt.hashSync(plainText, saltRounds);
}

function genHashPassword() {
  this.password = this.hashPassword(this.password);
}

function comparePassword(inputPassword, dbPassword) {
  return bcrypt.compareSync(inputPassword, dbPassword);
}

export default {
  hashPassword,
  genHashPassword,
  comparePassword,
};
