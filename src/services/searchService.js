import Product from "../models/product.js";

export const searchProducts = async (query) => {
  const { name } = query;
  let searchQuery = {};

  if (name) {
    searchQuery.name = { $regex: name, $options: "i" };
  }

  const products = await Product.find(searchQuery).populate("category");
  return products;
};
