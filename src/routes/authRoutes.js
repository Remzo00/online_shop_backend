import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  login,
  register,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/user/register", register);
authRouter.post("/user/login", login);
authRouter.get("/user", authMiddleware, getUsers);
authRouter.get("/user/:id", authMiddleware, getUser);
authRouter.put("/user/:id", authMiddleware, updateUser);
authRouter.delete("/user/:id", authMiddleware, deleteUser);

export default authRouter;
