// src/pages/Forum/ForumPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forum.css';

const dummyTopics = [
  {
    id: '1',
    title: 'How do you stay disciplined every day?',
    author: 'sharkUser01',
    replies: 3,
  },
  {
    id: '2',
    title: 'What habits changed your life?',
    author: 'gleen',
    replies: 5,
  },
];

const ForumPage = () => {
  const [topics, setTopics] = useState(dummyTopics);
  const [newTopic, setNewTopic] = useState('');
  const navigate = useNavigate();

  const handleCreateTopic = () => {
    if (!newTopic.trim()) return;
    const newEntry = {
      id: (topics.length + 1).toString(),
      title: newTopic,
      author: 'guestUser',
      replies: 0,
    };
    setTopics([newEntry, ...topics]);
    setNewTopic('');
  };

  return (
    <div className="forum-container">
      <h1 className="forum-title">🗣️ Forum & Discussion</h1>

      <div className="new-topic">
        <input
          type="text"
          placeholder="Start a new topic..."
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />
        <button onClick={handleCreateTopic}>Post</button>
      </div>

      <div className="topic-list">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="topic-item"
            onClick={() => navigate(`/forum/${topic.id}`)}
          >
            <h3>{topic.title}</h3>
            <p>
              by <strong>{topic.author}</strong> • 💬 {topic.replies} replies
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
