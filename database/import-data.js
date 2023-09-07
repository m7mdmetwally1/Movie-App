import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { movieModel } from "../model/movie/movie.model.js";
import { userModel } from "../model/user/user.model.js";
import { connection } from "./dbConnection.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

connection();

const __dirname = dirname(fileURLToPath(import.meta.url));

const movies = JSON.parse(
  fs.readFileSync(`${__dirname}/movie_data.json`, "utf-8")
);

const importData = async () => {
  try {
    const originalValidateBeforeSave =
      movieModel.schema.options.validateBeforeSave;
    movieModel.schema.options.validateBeforeSave = false;

    await movieModel.create(movies);
    movieModel.schema.options.validateBeforeSave = originalValidateBeforeSave;
    await userModel.create();

    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

const deleteData = async () => {
  console.log("before delete");
  try {
    await movieModel.deleteMany({});
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
