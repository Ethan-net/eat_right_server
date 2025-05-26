const joi = require("joi");

const postItemValidationSchema = joi.object({
  itemName: joi.string().min(3).required(),
  description: joi.string().min(10).required(),
  price: joi.number().positive().required(),
  orderNow: joi.string().required(),
  available: joi.string().required(),
  image: joi.string().optional(),
});

module.exports = postItemValidationSchema;
