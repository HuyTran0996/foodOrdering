import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";
import dbConnect from "./config/dbConnect";
import userRouter from "./routes/userRouter";

const app = express();
dbConnect();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
