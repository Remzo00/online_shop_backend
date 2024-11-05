import express from "express";
import {
  getCategories,
  getCategoryByProduct,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategories);
categoryRouter.get("/categories/product/:productId", getCategoryByProduct);

export default categoryRouter;
