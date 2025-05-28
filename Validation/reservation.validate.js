const joi = require("joi");

const reservationValidation = joi.object({
  name: joi.string().max(30).required(),
  contact: joi.string().required(),
  purpose: joi.string().required().min(20),
  date: joi.date().required(),
  time: joi.string().required(),
});

module.exports = reservationValidation;
