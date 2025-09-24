import React from "react";
import BlogCard from "./BlogCard";
import "../styles/BlogGrid.css";

function BlogGrid({ blogs, onEdit, onDelete }) {
  if (blogs.length === 0) return <p className="empty">No blogs yet.</p>;

  const [featured, ...others] = blogs;

  return (
    <div className="blog-grid">
      {featured && (
        <div className="featured">
          <div className="featured-img"></div>
          <div className="featured-content">
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <button onClick={() => onEdit(featured)} className="edit">Edit</button>
            <button onClick={() => onDelete(featured._id)} className="delete">Delete</button>
          </div>
        </div>
      )}
      <div className="grid">
        {others.map((blog) => (
          <BlogCard key={blog._id} blog={blog} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default BlogGrid;
