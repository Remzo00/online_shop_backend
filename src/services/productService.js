import Product from "../models/product.js";
import Category from "../models/category.js";

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
  return product;
};

export const addCategory = async (productId, categoryId) => {
  const categoryExists = await Category.findById(categoryId);
  if (!categoryExists) {
    throw new Error("Category not found");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    { category: categoryId },
    { new: true }
  );

  if (!updatedProduct) {
    throw new Error("Product not found");
  }

  return updatedProduct;
};
