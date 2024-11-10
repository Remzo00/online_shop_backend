import { getAllCategories } from "../services/categoryService.js";
import { addCategory } from "../services/productService.js";
import mongoose from "mongoose";

export const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.status(200).json({ categories });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error getting categories", error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { productId, category } = req.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ message: "Invalid category ID format" });
    }

    const updatedProduct = await addCategory(productId, category);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
