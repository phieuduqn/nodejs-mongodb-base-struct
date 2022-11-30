/* eslint-disable no-unused-vars */
import Joi from "@hapi/joi";
import errorMessage from "../../utils/custom-error-message";

export const validateUpdate = Joi.object().keys({
  company: Joi.object({
    name: Joi.string().trim().error(errorMessage()),
    phone: Joi.string().trim().error(errorMessage()),
    email: Joi.string().trim().error(errorMessage()),
  }).error(errorMessage()),
  senderEmail: Joi.string().trim().error(errorMessage()),
  senderDomain: Joi.string().trim().error(errorMessage()),
});
