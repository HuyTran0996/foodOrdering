import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Connected to DB ");
  } catch (err) {
    console.log("DB connection failed:", err);
  }
};

export default dbConnect;
