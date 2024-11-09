import express from "express";
import { searchProduct } from "../controllers/seacrhController.js";
import { getProduct } from "../controllers/productController.js";

const searchRouter = express.Router();

searchRouter.get("/search", searchProduct);
searchRouter.get("/:id", getProduct);

export default searchRouter;
