const Post = require("../models/post");
const asyncHandler = require("express-async-handler");

const createPost = asyncHandler(async (req, res) => {
  try {
    const { title, subtitle, content } = req.body;
    const img = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;
    const post = await Post.create({
      title,
      subtitle,
      content,
      img,
      author: req.user._id,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
});

const getPostById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = { createPost, getPosts, getPostById };
