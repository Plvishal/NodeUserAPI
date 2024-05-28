import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ msg: 'You are already register' });
  }

  // first hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    name,
    email,
    password: hashPassword,
  });

  const savedUser = await newUser.save();

  res.send({ msg: 'You are register successfully', savedUser });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ msg: "User does't exits" });
    }
    const comPassword = await bcrypt.compare(password, user.password);
    if (comPassword == false) {
      return res.send({ msg: 'Please enter correct password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.cookie('token', token, { httpOnly: true });
    return res.status(200).json({ msg: 'Login successfully done' });
  } catch (error) {
    console.log(error.message);
  }
};
