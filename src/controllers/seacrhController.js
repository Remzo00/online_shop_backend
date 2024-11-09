import { searchProducts } from "../services/searchService.js";

export const searchProduct = async (req, res) => {
  try {
    const products = await searchProducts(req.query);
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({
      message: "Error searching products",
      error: error.message,
    });
  }
};
