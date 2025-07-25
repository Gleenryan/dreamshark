import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Learn from './pages/Learn/Learn';
import Rank from './pages/Rank/Rank';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Profile from './pages/Profile/Profile';
import Sharkbot from './pages/Sharkbot/Sharkbot';
import VideoPage from './pages/VideoPage/VideoPage'; // <- 👈 your video page
import TestRead from './pages/TestRead';
import SharkAssessment from './pages/Sharkbot/SharkAssesment'; // <- 👈 your assessment page
import './App.css';
import RankCelebration from './pages/Rank/RankCelebration';

function Layout() {
  const location = useLocation();
  const isVideoPage = location.pathname.startsWith('/video');

  return (
    <>
      {!isVideoPage && <Sidebar />} {/* 👈 Hide Sidebar on /video */}
      <div className={`Main ${isVideoPage ? 'fullscreen' : ''}`}>
        <Routes>
          <Route path="/" element={<Learn />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sharkbot" element={<Sharkbot />} />
          <Route path="/video/:lessonId" element={<VideoPage />} />
          <Route path="/testread" element={<TestRead />} />
          <Route path="/sharkbot/:lessonId" element={<SharkAssessment />} />
          <Route path="/sharkbot/:topicId" element={<Sharkbot />} />
          <Route path="/rank-celebration" element={<RankCelebration />} />



        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
