require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const { errorHandler } = require("./middleware/error");

const app = express();
app.use(express.json());


connectDB();

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});