import React from 'react';

export default function Navbar(props) {
  // Styles for the navbar
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: props.mode === 'light' ? '#f8f9fa' : '#333',
    color: props.mode === 'light' ? '#000' : '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: props.mode === 'light' ? '#000' : '#fff',
    marginRight: '15px',
    fontWeight: 'bold',
  };

  const switchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  };

  const switchStyle = {
    width: '40px',
    height: '20px',
    backgroundColor: props.mode === 'light' ? '#ccc' : '#555',
    borderRadius: '20px',
    position: 'relative',
    transition: 'background-color 0.3s',
  };

  const toggleStyle = {
    position: 'absolute',
    top: '2px',
    left: props.mode === 'light' ? '2px' : '18px',
    width: '16px',
    height: '16px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    transition: 'left 0.3s',
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{props.title}</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/" style={linkStyle}>Home</a>
        <div style={switchContainerStyle} onClick={props.toggleMode}>
          <span>{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</span>
          <div style={switchStyle}>
            <div style={toggleStyle}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
