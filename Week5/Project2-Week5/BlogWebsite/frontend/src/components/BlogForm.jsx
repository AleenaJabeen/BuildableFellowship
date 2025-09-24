import React, { useState, useEffect } from "react";
import "../styles/BlogForm.css";

function BlogForm({ addBlog, updateBlog, editBlog, setShowForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editBlog) {
      setTitle(editBlog.title);
      setDescription(editBlog.description);
    }
  }, [editBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editBlog) {
      updateBlog(editBlog._id, { title, description });
    } else {
      addBlog({ title, description });
    }
  };

  return (
    <div className="form-overlay">
      <form className="blog-form" onSubmit={handleSubmit}>
        <h2>{editBlog ? "Edit Blog" : "Add Blog"}</h2>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">{editBlog ? "Update" : "Add"}</button>
        <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
      </form>
    </div>
  );
}

export default BlogForm;
