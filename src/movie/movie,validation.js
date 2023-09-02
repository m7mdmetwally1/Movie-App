import Joi from 'joi';

export const movieValidationSchema = Joi.object({
    adult: Joi.boolean().required(),
    backdrop_path: Joi.string(),
    original_language: Joi.string(),
    genre_ids: Joi.array().items(Joi.string()),
    title: Joi.string().required().trim(),
    poster_path: Joi.string(),
    overview: Joi.string().required().trim(),
    release_date: Joi.date(),
    popularity: Joi.number().min(0).max(100).default(0),
    vote_count: Joi.number().min(0).max(5000).default(0),
    video: Joi.boolean().default(false),
}).options({ abortEarly: false });

export const updateMovieSchema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    adult: Joi.boolean(),
    backdrop_path: Joi.string(),
    original_language: Joi.string(),
    genre_ids: Joi.array().items(Joi.string()),
    title: Joi.string().trim(),
    poster_path: Joi.string(),
    overview: Joi.string().trim(),
    release_date: Joi.date(),
    popularity: Joi.number().min(0).max(100).default(0),
    vote_count: Joi.number().min(0).max(5000).default(0),
})

export const deleteMovieSchema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
})


