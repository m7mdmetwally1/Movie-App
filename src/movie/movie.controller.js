import { movieModel } from "../../model/movie/movie.model.js";
import { deleteOne } from "../handler/factor.js";
import { catchError } from "../utilities/catchError.js";

export const addMovie = catchError(async (req, res, next) => {
  //   let movie = await movieModel.find({ title });
  //   if (!movie) {
  //     const Movie = new movieModel(req.body);
  //     await movieModel.save();
  //     res.status(201).json({ message: "movie added successfully", Movie });
  //   }

  const newMovie = await movieModel.create(req.body);

  res.status(201).json({
    message: "success",
    Movie: newMovie,
  });
});

export const updateMovie = catchError(async (req, res, next) => {
  let movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  movie &&
    res.status(201).json({ message: "movie updated successfully", movie });
  !movie && next(new AppError("movie not found", 404));
});

export const deleteMovie = deleteOne(movieModel, "movie");

export const getAllMovies = catchError(async (req, res, next) => {
  let movies = await movieModel.find().sort("-createdAt");
  res.status(200).json({ message: "success", movies });
});

export const getMovieDetails = catchError(async (req, res, next) => {
  console.log("in details");
  res.status(200).json({ message: "success", result: "there is no data yet" });
});

export const LatestMovies = catchError(async (req, res, next) => {
  console.log("in latest movies");
});
