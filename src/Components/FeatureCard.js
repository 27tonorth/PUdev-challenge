import React from 'react';

function FeatureCard({ dialogue, image, name, position}) {

  return (
    <div className="feature-card">
      <div className="feature-card__content">
        <p className="feature-card__dialogue">{dialogue}</p>
      </div>
      <div className="feature-card__profile">
        <div className="feature-card__image-container">
          <img src={image} alt="" className="feature-card__image" />
        </div>
        <div className="feature-card__profile-content">
          <h3 className="feature-card__name">{name}</h3>
          <p className="feature-card__position">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;