const joi = require("joi");

const postItemValidationSchema = joi.object({
  name: joi.string().min(3).max(50).required(),
  description: joi.string().min(10).required(),
  price: joi.number().positive().required(),
  orderNow: joi.string().uri().required(),
  image: joi.string().uri().required,
});

module.exports = postItemValidationSchema;
