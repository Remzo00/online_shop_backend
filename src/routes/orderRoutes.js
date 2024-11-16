import express from "express";
import {
  placeOrder,
  fetchUserOrders,
  updateOrderById,
  deleteOrderById,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/orders", placeOrder);
orderRouter.get("/orders/:userId", fetchUserOrders);
orderRouter.put("/orders/:id", updateOrderById);
orderRouter.delete("/orders/:id", deleteOrderById);

export default orderRouter;
