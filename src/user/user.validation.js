import Joi from "joi"



export const signUpSchema = Joi.object({
    firstName: Joi.string().min(3).max(10).required(),
    lastName: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z][a-z0-9]{3,8}$/).required(),
    age: Joi.number().min(14).max(70).required()
})
export const signInSchema = Joi.object({

    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z][a-z0-9]{3,8}$/).required()

})
export const updateUserSchema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
    firstName: Joi.string().min(3).max(10),
    lastName: Joi.string().min(3).max(10),
    email: Joi.string().email(),
    age: Joi.number().min(14).max(70)
})


export const deleteUserSchema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/)
})