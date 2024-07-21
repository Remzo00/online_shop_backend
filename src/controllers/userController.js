import { registerUser, loginUser } from "../services/authService.js";
import {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../services/userService.js";

export async function register(req, res) {
  const { name, email, password } = req.body;
  try {
    const newUser = await registerUser(name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating user", error: error.message });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: "Error logging in", error: error.message });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error getting users", error: error.message });
  }
}

export async function getUser(req, res) {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error getting user", error: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const userId = req.params.id;
    const updateData = req.body;
    const updatedUser = await updateUserById(userId, updateData);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating user", error: error.message });
  }
}
export async function deleteUser(req, res) {
  try {
    const userId = req.params.id;
    const deletedUser = await deleteUserById(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error deleting user", error: error.message });
  }
}
