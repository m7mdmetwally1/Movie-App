import express from "express";
import {
  addMovie,
  deleteMovie,
  getAllMovies,
  updateMovie,
  getMovieDetails,
  LatestMovies,
} from "./movie.controller.js";

const movieRouter = express.Router();

movieRouter.route("/LatestMovies").get(LatestMovies);

movieRouter.route("/").post(addMovie).get(getAllMovies);

movieRouter
  .route("/:id")
  .put(updateMovie)
  .delete(deleteMovie)
  .get(getMovieDetails);

export default movieRouter;
