import express from "express";
import { getAllProducts, getProductById } from "../services/productService.js";
import { getProduct, getProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/products", getProducts);
productRouter.get("/products/:id", getProduct);

export default productRouter;
