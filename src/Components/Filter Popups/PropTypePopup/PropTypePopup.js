import React from 'react';
import './PropTypePopup.css';
const PropTypePopup = ({ cards, setPropertyType, propertyTypeToggle }) => {
  const Types = [...new Set(cards.map((item) => item.type))];
  return (
    <div className="popup-container">
      {Types.map((type, i) => (
        <div
          className="rows"
          key={i}
          onClick={() => {
            setPropertyType(type);
            propertyTypeToggle();
          }}
        >
          {type}
        </div>
      ))}
    </div>
  );
};

export default PropTypePopup;
