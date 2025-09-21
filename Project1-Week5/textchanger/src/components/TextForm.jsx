import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function TextForm(props) {
  const [text, setText] = useState('');

  // Handlers
  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());
  const handleClearClick = () => setText('');
  const handleCopy = () => navigator.clipboard.writeText(text);
  const handleTrimClick = () => setText(text.replace(/\s+/g, ' ').trim());
  const handleOnChange = (e) => setText(e.target.value);

  // Styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    color: props.mode === 'dark' ? '#fff' : '#000',
    backgroundColor: props.mode === 'dark' ? '#111' : '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '700px',
    margin: '20px auto',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  };

  const textareaStyle = {
    width: '100%',
    minHeight: '150px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    resize: 'vertical',
    backgroundColor: props.mode === 'dark' ? '#222' : '#fff',
    color: props.mode === 'dark' ? '#fff' : '#000',
    marginBottom: '15px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: props.mode === 'dark' ? '#444' : '#007bff',
  };

  const summaryStyle = {
    marginTop: '20px',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h1>{props.heading}</h1>
      <textarea
        value={text}
        onChange={handleOnChange}
        style={textareaStyle}
        placeholder="Enter your text here..."
      ></textarea>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <motion.button whileHover={{ scale: 1.1 }} style={buttonStyle} onClick={handleUpClick}>
          Uppercase
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} style={buttonStyle} onClick={handleLoClick}>
          Lowercase
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} style={buttonStyle} onClick={handleClearClick}>
          Clear
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} style={buttonStyle} onClick={handleTrimClick}>
          Remove Spaces
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} style={buttonStyle} onClick={handleCopy}>
          Copy
        </motion.button>
      </div>

      <div style={summaryStyle}>
        <h2>Text Summary</h2>
        <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{(0.008 * (text.trim() === '' ? 0 : text.trim().split(/\s+/).length)).toFixed(2)} Minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview...'}</p>
      </div>
    </div>
  );
}
