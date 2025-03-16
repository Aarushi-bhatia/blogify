const express = require("express");
const multer = require("multer");
const path = require("path");
const { createPost, getPosts, getPostById } = require("../controllers/post");
const { protect } = require("../middleware/auth");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now(), +path.extname(file.originalname));
  },
});

const upload = multer({ storage });
router.post("/", protect, upload.single("image"), createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);

module.exports = router;
