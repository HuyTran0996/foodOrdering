import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.status(200).json({ message: "health OK!" });
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
