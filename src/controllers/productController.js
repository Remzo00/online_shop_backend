import { getAllProducts, getProductById } from "../services/productService.js";

export async function getProducts(req, res) {
  try {
    const products = await getAllProducts();
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error getting products", error: error.message });
  }
}

export async function getProduct(req, res) {
  try {
    const productId = req.params.id;
    const product = await getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error getting product", error: error.message });
  }
}
