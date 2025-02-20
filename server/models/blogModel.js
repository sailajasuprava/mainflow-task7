const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [5, "Title must be at least 5 characters long"],
      maxlength: [100, "Title must be less than 100 characters long"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: [20, "Content must be at least 20 characters long"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
