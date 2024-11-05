import { getAllCategories } from "../services/categoryService.js";
import { getCategoryForProduct } from "../services/productService.js";

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

export const getCategoryByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const category = await getCategoryForProduct(productId);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({
      message: "Error getting category for product",
      error: error.message,
    });
  }
};
