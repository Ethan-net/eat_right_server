const joi = require("joi");

const postAdvalidate = joi.object({
  name: joi.string(),
  image: joi.string().required(),
});

module.exports = postAdvalidate;
