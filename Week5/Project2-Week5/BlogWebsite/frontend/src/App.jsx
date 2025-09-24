import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import BlogGrid from "./components/BlogGrid";
import BlogForm from "./components/BlogForm";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editBlog, setEditBlog] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data));
  }, []);

  const addBlog = (blog) => {
    axios.post("http://localhost:5000/api/blogs", blog).then((res) => {
      setBlogs([...blogs, res.data]);
      setShowForm(false);
    });
  };

  const updateBlog = (id, updatedBlog) => {
    axios
      .put(`http://localhost:5000/api/blogs/${id}`, updatedBlog)
      .then((res) => {
        setBlogs(blogs.map((b) => (b._id === id ? res.data : b)));
        setEditBlog(null);
        setShowForm(false);
      });
  };

  const deleteBlog = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`).then(() => {
      setBlogs(blogs.filter((b) => b._id !== id));
    });
  };

  return (
    <div style={{marginTop:"80px"}}>
      <Navbar onAddClick={() => setShowForm(true)} />
      <button className="add-btn" onClick={() => setShowForm(true)}>
        + Add Blog
      </button>

      <header className="header">
        <h1>The Blog</h1>
      </header>

      {showForm && (
        <BlogForm
          addBlog={addBlog}
          updateBlog={updateBlog}
          editBlog={editBlog}
          setShowForm={setShowForm}
        />
      )}

      <BlogGrid blogs={blogs} onEdit={setEditBlog} onDelete={deleteBlog} />
    </div>
  );
}

export default App;
