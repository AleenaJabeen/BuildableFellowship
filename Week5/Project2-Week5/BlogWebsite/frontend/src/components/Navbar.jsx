import React from "react";
import "../styles/Navbar.css";

function Navbar({ onAddClick }) {
  return (
    <nav className="navbar">
      <div className="logo">D</div>
      <ul className="nav-links">
        <li className="active">Home</li>
        <li >Blog</li>
        <li>Bookmarks</li>
        <li>Elements</li>
      </ul>
      <button className="add-btn" onClick={onAddClick}>+ Add Blog</button>
    </nav>
  );
}

export default Navbar;
