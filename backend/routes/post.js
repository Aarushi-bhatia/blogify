const express = require("express")
const { createPost, getPosts } = require("../controllers/post");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/", protect, createPost);
router.get("/", getPosts);

module.exports = router;