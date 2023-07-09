import React from 'react';

function FeatureCard({ dialogue, image, name, position}) {
  const isRightAligned = name === 'รองศาสตราจารย์ ดร. วาสนา วงศ์สุรวัฒน์'; 

  return (
    <div className={`feature-card ${isRightAligned ? 'right-aligned' : ''}`}>
      <div className={`feature-card__dialogue ${isRightAligned ? 'text-align-end' : ''}`}>{dialogue}</div>
      <div className="feature-card__profile">
        <div className={`feature-card__image-container ${isRightAligned ? 'text-align-end' : ''}`}>
          <img src={image} alt="" className="feature-card__image" />
        </div>
        <div className={`feature-card__profile-content ${isRightAligned ? 'text-align-end' : ''}`}>
          <h3 className={`feature-card__name ${isRightAligned ? 'text-align-end' : ''}`}>{name}</h3>
          <p className="feature-card__position">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;