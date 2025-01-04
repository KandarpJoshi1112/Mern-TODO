import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import todoRoute from "./routes/todo.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
configDotenv();

const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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

app.use("/todo", todoRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
