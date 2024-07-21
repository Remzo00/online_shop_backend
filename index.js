import express from "express";
import dotenv from "dotenv";
import { config as connectDB } from "./src/config/config.js";
import authRouter from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(authRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));