import { globalError } from "../middleware/globalError.js";
import userRouter from "../user/user.routes.js";
import { AppError } from "./AppError.js";
import movieRouter from "../movie/movie.routes.js";

export const Bootstrap = (app) => {
  app.use("/user", userRouter);
  app.use("/movies", movieRouter);

  app.all("*", (req, res, next) => {
    // res.status(404).json({message:"not found endpoint"})
    next(new AppError("not found endpoint", 404));
  });

  app.use(globalError);
};
