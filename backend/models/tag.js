const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = TagSchema;