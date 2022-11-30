import Joi from "joi";
import errorMessage from "../../utils/custom-error-message";
import configs from "../../configs";

export const validateCreateAdmin = Joi.object().keys({
  username: Joi.string().required().alphanum().error(errorMessage()),
  password: Joi.string().min(6).required().error(errorMessage()),
  fullName: Joi.string().required().error(errorMessage()),
  avatar: Joi.string().error(errorMessage()),
  phone: Joi.string().error(errorMessage()),
  gender: Joi.string().error(errorMessage()),
  role: Joi.string().required().error(errorMessage()),
  email: Joi.string().regex(configs.regex.email).error(errorMessage()),
});

export const validateUpdate = Joi.object().keys({
  fullName: Joi.string().error(errorMessage()),
  avatar: Joi.string().error(errorMessage()),
  phone: Joi.string().error(errorMessage()),
  role: Joi.string().error(errorMessage()),
  blocked: Joi.number()
    .allow(...[1, 0])
    .error(errorMessage()),
  email: Joi.string().regex(configs.regex.email).error(errorMessage()),
});

export const validateLogIn = Joi.object().keys({
  username: Joi.string().required().alphanum().error(errorMessage()),
  password: Joi.string().required().error(errorMessage()),
});
