import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    adult: {
      type: Boolean,
      required: true,
    },
    backdrop_path: {
      type: String,
    },
    original_language: {
      type: String,
    },
    genre_ids: [{}],
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    poster_path: {
      type: String,
    },
    overview: {
      type: String,
      required: true,
      trim: true,
    },
    release_date: {
      type: Date,
      default: null,
    },
    popularity: {
      type: Number,
      min: 0,
      // max: 10000,
      default: 0,
    },
    vote_count: {
      type: Number,
      min: 0,
      max: 5000,
      default: 0,
    },
    video: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
  {
    validateBeforeSave: false,
  }
);

export const movieModel = mongoose.model("movie", movieSchema);
