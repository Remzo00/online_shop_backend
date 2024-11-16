import Order from "../models/order.js";
import Product from "../models/product.js";
export const createOrder = async (userId, products) => {
  let totalPrice = 0;

  const productDetails = await Promise.all(
    products.map(async ({ productId, quantity }) => {
      const product = await Product.findById(productId);
      if (!product) throw new Error("Product not found");
      if (product.stock < quantity)
        throw new Error("Insufficient stock for product: " + product.name);

      product.stock -= quantity;
      await product.save();

      totalPrice += product.price * quantity;

      return { product: product._id, quantity };
    })
  );

  const order = new Order({
    user: userId,
    products: productDetails,
    totalPrice,
  });

  await order.save();
  return order;
};

export const getOrdersByUser = async (userId) => {
  const orders = await Order.find({ user: userId }).populate(
    "products.product"
  );
  return orders;
};

export const updateOrder = async (orderId, updatedData) => {
  const order = await Order.findByIdAndUpdate(orderId, updatedData, {
    new: true,
  });

  if (!order) {
    throw new Error("Order not found");
  }

  return order;
};

export const deleteOrder = async (orderId) => {
  const order = await Order.findByIdAndDelete(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  return order;
};
