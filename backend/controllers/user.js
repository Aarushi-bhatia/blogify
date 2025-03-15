const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateTokens");

const registerUser = asyncHandler(async (req, res)=>{
  const {username, email, password} = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ username, email, password});

  if(user){
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  }else{
    res.status(400);
    throw new Error("Invalid User data");
  }
})

const loginUser = asyncHandler(async(req, res)=>{
  const { email, password} = req.body;
  const user = await User.findOne({ email});
  if(user && user.password === password){
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else{
    res.status(401);
    throw new Error("Invalid email or password");
  }
})

module.exports = { registerUser, loginUser }