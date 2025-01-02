import User from "../model/user.model.js";
import { z } from "zod";
import bcrypt from "bcryptjs";

const userSchema = z.object({
  email: z.string().email({ message: "Invalid Email Address" }),
  username: z.string().min(3, { message: "Username must be atleat 3 characters" }).max(20),
  password: z.string().min(6, { message: "passowrd must be atleast 6 character long" }).max(20),
});

export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const validation = userSchema.safeParse({ email, username, password });

    if (!validation.success) {
      const errorMessage = validation.error.errors.map((error) => error.message);
      return res.status(400).json({ message: errorMessage });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();

    if (newUser) {
      return res.status(200).json({ message: "User Created Successfully", newUser });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Registering User" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All Fields are Required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    res.status(200).json({ message: "User Logged In Successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error Logging In User" });
  }
};

export const logout = async (req, res) => {
  console.log("Logout Function Called");
};
