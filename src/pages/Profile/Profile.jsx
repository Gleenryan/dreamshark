// src/pages/Profile/Profile.jsx
import React, { useEffect, useState } from 'react';
import './Profile.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from 'recharts';

const Profile = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Dummy data for now
    const dummyStats = {
      willpower: 7,
      finance: 4,
      focus: 5,
      lifeSkills: 3,
      discipline: 6,
    };
    setStats(dummyStats);
  }, []);

  const chartData = stats
    ? Object.entries(stats).map(([key, value]) => ({
        name: key
          .split(/(?=[A-Z])|-/)
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' '),
        value,
      }))
    : [];

  return (
    <div className="profile-container">
      <img
        src="/assets/warrior.jpeg"
        alt="Profile Banner"
        className="profile-banner"
      />
      <h1 className="profile-name">Gleen Ryan</h1>
      <h3 className="profile-title">Warrior Shark</h3>

      <div className="profile-flags">
        <div className="flag-box" style={{ borderColor: '#58cc02' }}>
          <span className="flag-icon">⚡</span>
          <span className="flag-label">Willpower</span>
        </div>
        <div className="flag-box" style={{ borderColor: '#f9a826' }}>
          <span className="flag-icon">💰</span>
          <span className="flag-label">Finance</span>
        </div>
        <div className="flag-box" style={{ borderColor: '#3c9dd9' }}>
          <span className="flag-icon">🧠</span>
          <span className="flag-label">Focus</span>
        </div>
        <div className="flag-box" style={{ borderColor: '#eab308' }}>
          <span className="flag-icon">🔥</span>
          <span className="flag-label">Life Skill</span>
        </div>
        <div className="flag-box" style={{ borderColor: '#6366f1' }}>
          <span className="flag-icon">🎯</span>
          <span className="flag-label">Discipline</span>
        </div>
      </div>

      <div className="stats-section">
  <h2>📊 Current Progress</h2>
  {chartData.length > 0 ? (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={{
                Willpower: '#58cc02',
                Finance: '#f9a826',
                Focus: '#3c9dd9',
                'Life Skills': '#eab308',
                Discipline: '#6366f1',
              }[entry.name] || '#8884d8'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  ) : (
    <p>Loading chart...</p>
  )}
</div>

    </div>
  );
};

export default Profile;
