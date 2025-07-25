// src/pages/Sharkbot/SharkAssessment.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SharkAssesment.css';

const fakeBotQuestions = [
  'Let’s see if you really understand what you’re talking about.\nNo quotes. No poetic fluff.\nJust answer this:\nWhat does “Scroll. Sleep. Repeat. Die.” mean to you?\nWhat’s the warning behind it?',
  'Hmm...\nSharp. Real. You didn’t hold back.\nYou’re not just describing the loop — you’re calling it what it is: a trade.\nTime → dopamine → emptiness → repeat.\n\nBut now I want more than that.\n\nTell me about the last time you were trapped in that cycle.\nNot someone else — you.\nWhat were you doing? What did it feel like?',
  'That’s it, huh?\nNot because you were resting.\nNot because you needed recovery.\n\nBut because you were trapped.\nBy the illusion that you were “busy” when in fact, you were just paused as a person.\n\nNow, let’s go deeper.\nWhat’s the real reason you got stuck in that cycle?\nGive me 1 emotional reason and 1 practical reason.\nDon’t give me surface-level answers. I want truth.',
  'That is a fact\n scrolling? Free dopamine. Zero barrier. Instant hit\n\n💡 Conclusion: You get it.\nYou’re not just aware of the scroll cycle.\nYou understand the psychology behind it.',
  '🦈 Assessment complete. Verdict: PASS.\nYou understand the loop — and how to fight it.\nWelcome to the shark pack.'
]

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
