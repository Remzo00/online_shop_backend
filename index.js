import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { config as connectDB } from "./src/config/config.js";
import authRouter from "./src/routes/authRoutes.js";
import productRouter from "./src/routes/productRoutes.js";
import categoryRouter from "./src/routes/categoryRoutes.js";
import searchRouter from "./src/routes/searchRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use(authRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(searchRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
