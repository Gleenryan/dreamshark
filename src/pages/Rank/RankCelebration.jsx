import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import './RankCelebration.css';

const RankCelebration = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false); // stops confetti after 5s
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigate('/rank');
  };

  return (
    <div className="celebration-container">
      {showConfetti && <Confetti width={width} height={height} />}
      <h1 className="celebration-title">🎉 You Passed!</h1>
      <p className="celebration-subtitle">Welcome to <strong>Warrior Shark 🦈</strong></p>
      <button className="continue-button" onClick={handleContinue}>
        Continue to Rank →
      </button>
    </div>
  );
};

export default RankCelebration;
