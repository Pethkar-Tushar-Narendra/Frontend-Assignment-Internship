import React from 'react';
import './Card.css';
const Card = ({ card }) => {
  return (
    <div className="cardContainer">
      <div className="row1">{card.name}</div>
      <div className="row2"></div>
    </div>
  );
};

export default Card;
