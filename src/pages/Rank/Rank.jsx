// src/pages/Rank/RankPage.jsx
import React from 'react';
import Slider from 'react-slick';
import './Rank.css';

const rankData = [
  {
    id: 'rookie',
    title: 'Rookie Shark',
    subtitle: 'Unlocked by default',
    image: '/assets/baby.jpeg',
    unlocked: true,
  },
  {
    id: 'warrior',
    title: 'Warrior Shark',
    subtitle: 'Beat SharkBot! for the first time🦈',
    image: '/assets/warriorfull.jpeg',
    unlocked: true,
  },
  {
    id: 'elite',
    title: '???',
    subtitle: 'Get Golden Trophy from SharkBot',
    image: '/assets/megalodon1.png',
    unlocked: false,
  },
];

const RankPage = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <div className="rank-page">
      <h1 className="rank-title">🏆 Your Shark Rank</h1>
      <Slider {...settings}>
        {rankData.map((rank) => (
          <div key={rank.id} className="rank-slide">
            <div className={`rank-image-wrapper ${!rank.unlocked ? 'locked' : ''}`}>
              <img
                src={rank.image}
                alt={rank.title}
                className="rank-image"
              />
              {!rank.unlocked && (
                <div className="lock-overlay">🔒</div>
              )}
            </div>
            <h2 className="rank-name">{rank.title}</h2>
            <p className="rank-subtitle">{rank.subtitle}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RankPage;
