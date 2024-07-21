import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (name, email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("Error registering user");
  }
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.TOKEN_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};
