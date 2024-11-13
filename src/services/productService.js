import Product from "../models/product.js";
import Category from "../models/category.js";
import mongoose from "mongoose";

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

export const getProductsByCategory = async (categoryId) => {
  const filter = categoryId
    ? { category: mongoose.Types.ObjectId(categoryId) }
    : {};
  const products = await Product.find(filter).populate("category");
  return products;
};

export const getProductsByCategoryName = async (categoryName) => {
  const category = await Category.findOne({ name: categoryName });
  console.log(category);
  if (!category) {
    throw new Error("Kategorija nije pronađena.");
  }

  const products = await Product.find({ category: category._id }).populate(
    "category"
  );
  console.log(products);

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
