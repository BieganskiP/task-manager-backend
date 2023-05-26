const Joi = require("joi");

const userValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .required()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\p{P}\p{S}])[A-Za-z\d\p{P}\p{S}]{8,}$/u
    )
    .message(
      "Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one number, and one special symbol"
    ),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

module.exports = { userValidationSchema, updateSubscriptionSchema };
