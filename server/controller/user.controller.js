import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res
      .status(208)
      .json({ message: "Username already used", success: false });
  }
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res
      .status(208)
      .json({ message: "Email already used", success: false });
  }
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User({ email, username, password: hashedPassword }).save();
  delete user.password;
  return res.status(201).json({message:'user Created Successfully', success: true,user });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  // console.log(existingUser)
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "Username or password incorrect", success: false });
  }
  const ispasswordCorrect = await bcrypt.compare(password, existingUser.password);
  // console.log(ispasswordCorrect)
  if (!ispasswordCorrect) {
    return res
      .status(208)
      .json({ message: "Username or password is incorrect", success: false });
  }
  delete existingUser.password;
  const user = existingUser;
  return res.status(201).json({message:'ser Login Successfully', success: true,user });
};

