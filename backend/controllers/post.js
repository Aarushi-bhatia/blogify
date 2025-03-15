const Post = require("../models/post")
const asyncHandler = require("express-async-handler");

const createPost = asyncHandler(async(req, res)=>{
  const { title, subtitle, content} = req.body;
  const post = await Post.create({ title, subtitle, content, author: req.user._id});

  res.status(201).json(post);
})

const getPosts = asyncHandler(async(req, res)=>{
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
})

module.exports = { createPost, getPosts };