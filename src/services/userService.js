import User from "../models/user.js";

export const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

export const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

export const updateUserById = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(id, updateData, { new: true });
  return user;
};

export const deleteUserById = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};
