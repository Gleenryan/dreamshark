// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Learn from './pages/Learn/Learn';
import Rank from './pages/Rank/Rank';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Profile from './pages/Profile/Profile';
import Sharkbot from './pages/Sharkbot/Sharkbot';
import './App.css';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="Main">
        <Routes>
          <Route path="/" element={<Learn />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sharkbot" element={<Sharkbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
