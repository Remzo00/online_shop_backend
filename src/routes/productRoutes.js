import express from "express";
import {
  getProduct,
  fetchProductsByCategory,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/products", fetchProductsByCategory);
productRouter.get("/products/:id", getProduct);

export default productRouter;
