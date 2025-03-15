require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());


require("./models/user");
require("./models/post");
require("./models/comment");
require("./models/tag");


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});