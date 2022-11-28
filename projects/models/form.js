const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    phonenumber: Joi.string().length(10).required(),
    city: Joi.string().required(),
    zipcode: Joi.string().required()
})

module.exports = {
    schema
}