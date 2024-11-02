import express from "express";
import { getProduct, getProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/products", getProducts);
productRouter.get("/products/:id", getProduct);

export default productRouter;
