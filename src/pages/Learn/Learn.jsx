// src/pages/Learn/Learn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Learn.css';

const allSubjects = {
  willpower: {
    title: 'WillPower & Self-Discipline',
    color: '#C0EEF2',
    dropdowns: [
      {
        id: 'ego',
        title: 'Scroll. Sleep. Repeat. Die.',
        color: '#58cc02',
        items: [
          'They Own Your Brain',
          'Keep Scrolling. Stay Broke',
          'Challenge Yourself',
          'Beat SharkBot!',
        ],
      },
      {
        id: 'atomic',
        title: 'Atomic Habits',
        color: '#f9a826',
        items: ['Tiny Habits', 'Habit Loop', 'Identity First'],
      },
      {
        id: 'deep',
        title: 'Deep Work',
        color: '#3c9dd9',
        items: ['Focused Blocks', 'Work Rituals', 'Kill Distraction'],
      },
    ],
  },
  finance: {
    title: 'Personal Finance & Wealth',
    color: '#d97706',
    dropdowns: [
      {
        id: 'rich',
        title: 'Rich Dad Poor Dad',
        color: '#eab308',
        items: ['Assets vs Liabilities', 'Cashflow Quadrant', 'Investing Basics'],
      },
      {
        id: 'mindset',
        title: 'Millionaire Mindset',
        color: '#d97706',
        items: ['Scarcity vs Abundance', 'Habits of Wealthy', 'Risk-taking'],
      },
    ],
  },
  focus: {
    title: 'Thinking Fundamentals',
    color: '#3b82f6',
    dropdowns: [
      {
        id: 'flow',
        title: 'Flow State Mastery',
        color: '#3b82f6',
        items: ['What is Flow?', 'Triggers', 'Flow Hacking'],
      },
      {
        id: 'dopamine',
        title: 'Dopamine Detox',
        color: '#6366f1',
        items: ['Rewiring Brain', 'Attention Recovery', 'Environment Setup'],
      },
    ],
  },
  core: {
    title: 'Core Principles & Life Values',
    color: '#3b82f6',
    dropdowns: [
      {
        id: 'values',
        title: 'Fundamental Ethics',
        color: '#4b5563',
        items: ['Integrity', 'Discipline', 'Purpose'],
      },
    ],
  },
  life: {
    title: 'Life Planning & Execution',
    color: '#3b82f6',
    dropdowns: [
      {
        id: 'planner',
        title: 'Plan Like a Pro',
        color: '#6b7280',
        items: ['Vision Boards', 'Priority Mapping', 'Weekly Planning'],
      },
    ],
  },
};

const Learn = () => {
  const [currentSubjectId, setCurrentSubjectId] = useState('willpower');
  const [openId, setOpenId] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [hoveredLesson, setHoveredLesson] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const navigate = useNavigate();

  const subject = allSubjects[currentSubjectId];
  const dropdowns = subject.dropdowns;

  const currentColor = hoveredBox
    ? dropdowns.find((d) => d.id === hoveredBox)?.color
    : subject.color;

  const currentSubtitle =
    dropdowns.find((d) => d.id === hoveredBox)?.title ||
    'Dream Like Human, Work Like Shark 🦈';

  const toggleBox = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleLessonClick = (lesson, dropId, index) => {
  const isSharkBot = lesson.toLowerCase().includes('sharkbot');
  const lessonId = `${dropId}-${index}`;

  if (isSharkBot) {
    navigate(`/sharkbot/${lessonId}`);
  } else {
    navigate(`/video/${lessonId}`); // <-- this was missing
  }
};

  return (
    <div className="learn-page container">
      <div className="learn-header" style={{ backgroundColor: currentColor }}>
        <h2 className="learn-subtitle">{currentSubtitle}</h2>
        <h1 className="learn-title">{subject.title}</h1>

        <select
          className="subject-switcher"
          value={currentSubjectId}
          onChange={(e) => {
            setCurrentSubjectId(e.target.value);
            setOpenId(null);
            setHoveredBox(null);
          }}
        >
          <option value="willpower">Willpower & Self-Discipline</option>
          <option value="finance">Financial Intelligence</option>
          <option value="life">Life Planning & Execution</option>
          <option value="core">Core Principles & Life Values</option>
          <option value="focus">Thinking Fundamentals</option>
        </select>
      </div>

      <div className="learn-content">
        {dropdowns.map((drop) => (
          <div
            key={drop.id}
            className="lesson-box"
            onClick={() => toggleBox(drop.id)}
            onMouseEnter={() => setHoveredBox(drop.id)}
            onMouseLeave={() => setHoveredBox(null)}
            style={{ borderLeft: `6px solid ${drop.color}` }}
          >
            <div className="lesson-title">
              {drop.title}
              <span className="arrow">{openId === drop.id ? '▲' : '▼'}</span>
            </div>
            {openId === drop.id && (
              <div className="lesson-items">
                {drop.items.map((item, index) => (
                  <div
                    key={index}
                    className={`lesson-item ${
                      activeLesson === item ? 'active' : ''
                    }`}
                    onClick={() => handleLessonClick(item, drop.id, index)}
                    onMouseEnter={() => setHoveredLesson(item)}
                    onMouseLeave={() => setHoveredLesson(null)}
                    style={{
                      backgroundColor: hoveredLesson === item ? drop.color : '',
                      color: hoveredLesson === item ? '#1e1e24' : '',
                      fontWeight: hoveredLesson === item ? 'bold' : '',
                    }}
                  >
                    {index + 1}. {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
