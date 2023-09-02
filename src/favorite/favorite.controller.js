import { favoriteModel } from "../../model/favourite/favourite.model.js";
import { movieModel } from "../../model/movie/movie.model.js";
import { catchError } from "../utilities/catchError.js";


export const addFavorite = catchError(async (req, res, next) => {

    let favorite = await favoriteModel.create({
        user_id,
        movie: {
            _id: movieModel._id,
            title: movieModel.title,
            poster_path: movieModel.poster_path,
            release_date: movieModel.release_date,
            genre: movieModel.genre,


        },
        added_date: new Date()
    })
    res.status(201).json({ message: `favorite added successfully to ${user_id} ,${favorite}` })
})

export const getUserFavorite = catchError(async (req, res, next) => {
    let userFavorite = await favoriteModel.find({ user_id: req.params.user_id }).populate('movie_id')
    res.status(200).json({ message: "success", userFavorite })
})
export const deleteFavorite = deleteOne(favoriteModel, 'favorite')