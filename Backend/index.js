import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";

const app = express();
configDotenv();

const PORT = process.env.PORT || 4001;
const DB_URI = process.env.MONGODB_URI;

//Database Connection Code
try {
  mongoose.connect(DB_URI);
  console.log("Database Connected Successfully");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
