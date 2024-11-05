import Category from "../models/category.js";

export const getAllCategories = async () => {
  const categories = await Category.find();
  return categories;
};
