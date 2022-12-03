import React, { useState } from 'react';
import './LocationPopup.css';
import { HiSearch } from 'react-icons/hi';
const LocationPopup = ({ cards, setLocation, locationToggle }) => {
  const locations = [...new Set(cards.map((item) => item.location))];
  const [search, setSearch] = useState('');
  return (
    <div className="popup-container">
      <div className="input">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <i>
          <HiSearch />
        </i>
      </div>
      {locations
        .filter((location, i) =>
          location.toUpperCase().includes(search.toUpperCase())
        )
        .map((location, i) => (
          <div
            className="rows"
            key={i}
            onClick={() => {
              setLocation(location);
              locationToggle();
            }}
          >
            {location}
          </div>
        ))}
    </div>
  );
};

export default LocationPopup;
