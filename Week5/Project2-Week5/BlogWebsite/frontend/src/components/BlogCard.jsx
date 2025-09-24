import React from "react";
import "../styles/BlogCard.css";

function BlogCard({ blog, onEdit, onDelete }) {
  return (
    <div className="blog-card">
      <div className="card-img"></div>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <button onClick={() => onEdit(blog)}>Edit</button>
      <button onClick={() => onDelete(blog._id)}>Delete</button>
    </div>
  );
}

export default BlogCard;
