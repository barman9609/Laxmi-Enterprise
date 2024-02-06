import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
import dot from 'dotenv'

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  dot.config().parsed;
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};