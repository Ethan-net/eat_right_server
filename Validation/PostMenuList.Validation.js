const joi = require("joi");

const postMenuItemValidation = joi.object({
  name: joi.string().required(),
  description: joi.string().required().min(10).max(50),
  available: joi.string().optional(),
  price: joi.number().required().positive(),
  image: joi.string().uri().optional(),
});

module.exports = postMenuItemValidation;
