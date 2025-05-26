const joi = require("joi");

const adminValidation = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  admin: joi.string(),
  password: joi.string().required(),
});

module.exports = adminValidation;
