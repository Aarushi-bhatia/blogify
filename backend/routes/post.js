const express = require("express")
const { createPost, getPosts, getPostById } = require("../controllers/post");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/", protect, createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);

module.exports = router;