import {
  createOrder,
  getOrdersByUser,
  updateOrder,
  deleteOrder,
} from "../services/orderService.js";

export const placeOrder = async (req, res) => {
  try {
    const userId = req.body.userId;
    const products = req.body.products;

    const order = await createOrder(userId, products);
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const fetchUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await getOrdersByUser(userId);
    res.status(200).json({ orders });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedOrder = await updateOrder(id, updatedData);

    res
      .status(200)
      .json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await deleteOrder(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
