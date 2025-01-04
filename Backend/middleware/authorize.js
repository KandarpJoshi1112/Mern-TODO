import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
export const authenticate = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ errors: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.userId);
  } catch (err) {
    res.status(401).json({ errors: "Token is not valid" });
  }
  next();
};