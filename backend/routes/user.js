const express = require("express");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile", protect, getUserProfile);

module.exports = router;