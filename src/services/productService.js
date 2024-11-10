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

export const getProductsByCategory = async (categoryId) => {
  const filter = categoryId ? { category: categoryId } : {};
  const products = await Product.find(filter).populate("category");
  return products;
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
