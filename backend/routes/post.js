const express = require("express")

const router = express.Router;

router.post("/", createPost);
router.post("/", getPosts);

modules.exports = router;