const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports = {
  create,
};
