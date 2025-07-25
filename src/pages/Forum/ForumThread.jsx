// src/pages/Forum/ForumThread.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Forum.css';

const dummyReplies = {
  1: [
    { from: 'dino', text: "Discipline comes from purpose." },
    { from: 'gleen', text: "Daily planning helps a lot!" },
    { from: 'anon', text: "Try Cold Showers 💧" },
  ],
  2: [
    { from: 'you', text: "Reading every morning." },
    { from: 'random', text: "Writing 5 mins a day helped me." },
  ],
};

const ForumThread = () => {
  const { id } = useParams();
  const [replies, setReplies] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setReplies(dummyReplies[id] || []);
  }, [id]);

  const handleReply = () => {
    if (!input.trim()) return;
    setReplies([...replies, { from: 'guestUser', text: input }]);
    setInput('');
  };

  return (
    <div className="forum-container">
      <h2 className="thread-title">🧵 Topic #{id}</h2>

      <div className="replies">
        {replies.map((msg, idx) => (
          <div key={idx} className="reply-bubble">
            <strong>{msg.from}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="new-reply">
        <input
          type="text"
          placeholder="Type your reply..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleReply()}
        />
        <button onClick={handleReply}>Reply</button>
      </div>
    </div>
  );
};

export default ForumThread;
