import mongoose from "mongoose";
import dot from 'dotenv'
import express from "express"
import colors from "colors";
const connectDB = async () => {
  try {
    dot.config().parsed;
    const url = process.env.URI;
    const conn = await mongoose.connect(url);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;