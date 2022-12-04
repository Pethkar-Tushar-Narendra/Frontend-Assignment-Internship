import React from 'react';
import './PricePopup.css';
const PricePopup = ({
  cards,
  minPrice,
  maxPrice,
  setMaxPrice,
  setMinPrice,
  priceToggle,
}) => {
  return (
    <div className="popup-container">
      <div className="row">
        <p className="label">Min Price</p>
        <input
          type="number"
          min="0"
          max="9999"
          value={minPrice}
          onChange={(e) => {
            if (e.target.value < maxPrice && e.target.value >= 0)
              setMinPrice(e.target.value);
          }}
        ></input>
      </div>
      <div className="row">
        <p className="label">Max Price</p>
        <input
          type="number"
          min="0"
          max="9999"
          value={maxPrice}
          onChange={(e) => {
            if (e.target.value > minPrice && e.target.value <= 99999)
              setMaxPrice(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default PricePopup;
