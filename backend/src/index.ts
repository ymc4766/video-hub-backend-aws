import express from "express";
import colors from "colors";
import "dotenv/config";
import { db } from "./config/db";
import userRouter from "./routes/userRoutes";
import { errorHandler } from "./middlewares/error";

const app = express();
db();

app.use(express.json());

app.use("/auth", userRouter);

app.use(errorHandler);
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`app is running `));
