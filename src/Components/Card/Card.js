import React from 'react';
import './Card.css';
import { BiBath } from 'react-icons/bi';
import { MdBed } from 'react-icons/md';
import { FaBorderStyle } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';
const Card = ({ card }) => {
  return (
    <div className="cardContainer">
      <div
        className="ribbon"
        style={card.popular ? { display: 'flex' } : { display: 'none' }}
      >
        <p>
          <BsStars />
          <span>Popular</span>
        </p>
      </div>
      <div className="row1">
        <img />
      </div>
      <div className="row2">
        <div className="col1">
          <div className="price">
            <p>
              {' '}
              <h2>${card.price}</h2>
              <sub>/month</sub>
            </p>
          </div>
          <h2>{card.name}</h2>
          <p>{card.address}</p>
          <div className="like">
            <AiOutlineHeart className="icon" />
          </div>
        </div>
        <div className="col2">
          <div className="utility">
            <MdBed className="icon" />
            <p>{card.beds} Beds</p>
          </div>
          <div className="utility">
            <BiBath className="icon" />
            <p>{card.bathroom} Bathrooms</p>
          </div>
          <div className="utility">
            <FaBorderStyle className="icon" />
            <p>
              {card.length}x{card.width} m<sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
