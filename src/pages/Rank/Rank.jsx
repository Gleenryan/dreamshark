// src/pages/Rank/RankPage.jsx
import React from 'react';
import Slider from 'react-slick';
import './Rank.css';

const rankData = [
  {
    id: 'rookie',
    title: 'Rookie Shark',
    subtitle: 'Unlocked by default',
    image: '/ranks/rookie.png',
    unlocked: true,
  },
  {
    id: 'warrior',
    title: 'Warrior Shark',
    subtitle: 'Complete 1 SharkBot Assessment',
    image: '/assets/warrior.png',
    unlocked: true,
  },
  {
    id: 'elite',
    title: 'Elite Shark',
    subtitle: 'Complete 3 Assessments',
    image: '/ranks/elite.png',
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
                src={rank.unlocked ? rank.image : '/ranks/locked.png'}
                alt={rank.title}
                className="rank-image"
              />
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
