import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`app is running `));
