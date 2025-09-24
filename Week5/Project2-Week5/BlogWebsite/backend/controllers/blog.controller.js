const Blog = require("../models/blog.model.js");

// Get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

// Create blog
const createBlog = async (req, res) => {
  const { title, description } = req.body;
  const newBlog = new Blog({ title, description });
  await newBlog.save();
  res.status(201).json(newBlog);
};

// Update blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
  res.json(updatedBlog);
};

// Delete blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id);
  res.json({ message: "Blog deleted" });
};

module.exports = { getBlogs, createBlog, updateBlog, deleteBlog };
