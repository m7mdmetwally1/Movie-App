import { connection } from "./database/dbConnection.js";
import dotenv from "dotenv";

import { app } from "./app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT;

connection();
const server = app.listen(port, () => {
  console.log(`app working on port ${port}`);
});
