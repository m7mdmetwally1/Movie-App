import express from "express";
import { Bootstrap } from "./src/utilities/bootstrap.js";
import cors from "cors";
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(cors());

Bootstrap(app);

app.get("/", (req, res) => res.send("Hello World!"));

export { app };
