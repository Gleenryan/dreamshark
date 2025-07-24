// src/Sidebar.jsx

import React from 'react';      
import './sidebar.css';  
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">🦈DreamShark</div>
      <nav className="sidebar-menu">
        <a href="#" className="sidebar-item active">Learn</a>
        <a href="#" className="sidebar-item">Rank</a>
        <a href="#" className="sidebar-item">Leaderboard</a>
        <a href="#" className="sidebar-item">Profile</a>
        <a href="#" className="sidebar-item">Sharkrudi Bot</a>
      </nav>
    </div>
  );
}

export default Sidebar;
