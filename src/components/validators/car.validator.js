import Joi from "joi";

const carValidator=Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Only letter from 1 to 20'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'Minimum 0',
        'number.max':'Maximum 1000000 '
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})
export {carValidator}