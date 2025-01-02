import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import todoRoute from "./routes/todo.route.js";
const app = express();
configDotenv();

const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

//Database Connection Code
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
//routes
app.use(express.json());
app.use("/todo", todoRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
