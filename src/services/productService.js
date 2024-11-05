import Product from "../models/product.js";

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

export const getCategoryForProduct = async (productId) => {
  const product = await Product.findById(productId).populate("category");
  return product.category;
};
