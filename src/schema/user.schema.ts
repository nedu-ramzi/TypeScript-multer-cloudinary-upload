import Joi from "joi";

export const registerValidation = Joi.object({
    fullname: Joi.string().min(3).max(35).required(),
    username: Joi.string().min(3).max(35).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
});

