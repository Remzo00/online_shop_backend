import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryByProduct,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategories);
categoryRouter.get("/categories/product/:productId", getCategoryByProduct);
categoryRouter.post("/categories/add", createCategory);

export default categoryRouter;
