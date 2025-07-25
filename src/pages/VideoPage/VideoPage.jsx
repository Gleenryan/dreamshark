import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VideoPage.css';

const videoMap = {
  'ego-0': 'C74amJRp730',
  'ego-1': 'GOMT5iVwh0E',
  'ego-2': 'z7e7gtU3PHY',
  'atomic-0': 'dQw4w9WgXcQ',
  'atomic-1': 'eKFTSSKCzWA',
  'atomic-2': 'tAGnKpE4NCI',
  'deep-0': 'MlRx5a3TFLs',
  'deep-1': 'wD1QJCP1OUs',
  'deep-2': 'yRrj_N9W1Uo',
};

const allSubjects = {
  willpower: {
    title: 'WillPower & Self-Discipline',
    dropdowns: [
      { id: 'ego', title: 'Scroll. Sleep. Repeat. Die.', items: ['They Own Your Brain', 'Keep Scrolling. Stay Broke', 'Challenge Yourself', 'Beat SharkBot'] },
      { id: 'atomic', title: 'Atomic Habits', items: ['Tiny Habits', 'Habit Loop', 'Identity First'] },
      { id: 'deep', title: 'Deep Work', items: ['Focused Blocks', 'Work Rituals', 'Kill Distraction'] },
    ],
  },
};

const VideoPage = () => {
  const { lessonId } = useParams();
  const videoId = videoMap[lessonId];
  const navigate = useNavigate();

  const [dropId, indexStr] = lessonId.split('-');
  const itemIndex = parseInt(indexStr, 10);

  let fullTitle = '📺 Your Lesson';

  for (const subject of Object.values(allSubjects)) {
    for (const drop of subject.dropdowns) {
      if (drop.id === dropId && drop.items[itemIndex]) {
        fullTitle = `${drop.title} — ${drop.items[itemIndex]}`;
      }
    }
  }

  return (
    <div className="video-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Learn
      </button>

      <h1 className="video-title">{fullTitle}</h1>

      <div className="video-wrapper">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Lesson Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPage;
