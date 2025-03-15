const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, ref:'User', required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }]
},{ timestamps: true });

module.exports = PostSchema;