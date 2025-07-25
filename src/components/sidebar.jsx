// src/Sidebar.jsx

import React from 'react';      
import { Link, useLocation } from 'react-router-dom'; // 👈 add this
import './sidebar.css';  

function Sidebar() {
  const location = useLocation(); // 👈 get current path

  return (
    <div className="sidebar">
      <div className="logo">🦈reamShark</div>
      <nav className="sidebar-menu">
        <Link to="/" className={`sidebar-item ${location.pathname === '/' ? 'active' : ''}`}>Learn</Link>
        <Link to="/rank" className={`sidebar-item ${location.pathname === '/rank' ? 'active' : ''}`}>Rank</Link>
        <Link to="/profile" className={`sidebar-item ${location.pathname === '/profile' ? 'active' : ''}`}>Profile</Link>
        <Link to="/forum" className={`sidebar-item ${location.pathname === '/forum' ? 'active' : ''}`}>Forum</Link>
        
        {/* <Link to="/sharkbot" className={`sidebar-item ${location.pathname === '/sharkbot' ? 'active' : ''}`}>Sharkudi Bot</Link> */}
      </nav>
    </div>
  );
}

export default Sidebar;
