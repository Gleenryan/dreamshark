// src/pages/Sharkbot/SharkAssessment.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SharkAssesment.css';

const fakeBotQuestions = [
  'Welcome challenger. Are you ready to face yourself?',
  'First: Why do you think people scroll endlessly, even when they hate it?',
  'Interesting. Now tell me one habit you’ve changed — and how?',
  'Last one: What will you do differently after this lesson?',
  '🦈 Assessment complete. Verdict: PASS. Welcome to the shark pack.'
];

const SharkAssessment = () => {
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 0) {
      setTimeout(() => {
        setMessages([{ from: 'bot', text: fakeBotQuestions[0] }]);
        setStep(1);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    if (step < fakeBotQuestions.length) {
      setTimeout(() => {
        const botMessage = fakeBotQuestions[step];
        setMessages([...newMessages, { from: 'bot', text: botMessage }]);
        setStep(step + 1);

        // ✅ Redirect after the final message
        if (step === fakeBotQuestions.length - 1) {
          setTimeout(() => {
            navigate('/rank-celebration');
          }, 3000); // wait 3 sec after PASS
        }
      }, 1000);
    }
  };

  return (
    <div className="shark-chat-container">
      <div className="shark-chat-header">🦈 SharkBot Assessment</div>
      <div className="shark-chat-box" ref={chatRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`chat-bubble ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      {step < fakeBotQuestions.length && (
        <div className="shark-chat-input">
          <input
            type="text"
            placeholder="Type your answer..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default SharkAssessment;
