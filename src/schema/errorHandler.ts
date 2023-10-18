import Joi from "joi";

export const errorHandler = function (payload: Request, schema: Joi.ObjectSchema) {

    const { error } = schema.validate(payload, { abortEarly: false });

    // let errors = {};
    let errors: { [key: string]: any } = {};

    if (error) {
        error.details.forEach((item) => {
            let key = item.context.key;

            let errorBag = {
                message: item.message,
            };

            errors[key] = errorBag;
        });

        return errors;
    }

    return null;
};
