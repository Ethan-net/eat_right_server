const joi = require("joi");

const postMenuItemValidation = joi.object({
  name: joi.string().required(),
  description: joi.string().required().min(10).max(50),
  available: joi.boolean().optional(),
  price: joi.number().required().positive(),
  image: joi.string().uri().required(),
});

module.exports = postMenuItemValidation;
