import express from "express";
import {
  createCategory,
  getCategories,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategories);
categoryRouter.post("/categories/add", createCategory);

export default categoryRouter;
