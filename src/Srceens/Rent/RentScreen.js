import React, { useState } from 'react';
import './RentScreen.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsCalendar3 } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { RiArrowDropUpLine } from 'react-icons/ri';
import cards from '../../Testing Data/Data';
const RentScreen = () => {
  var tempObj = {
    type: 'houser',
    location: 'nashik',
    date: '2022-12-11',
    minPrice: 0,
    maxPrice: 99999,
  };
  const [filterObj, setFilterObj] = useState({
    type: '',
    location: 'New York,USA',
    date: 'Select Move-in Date',
    minPrice: 0,
    maxPrice: 99999,
  });
  return (
    <section>
      <div className="rent-container">
        <div className="split">
          <h1>Search properties to rent</h1>
          <div className="input">
            <input type="text" placeholder="Search with Search Bar" />
            <i>
              <RiArrowDropDownLine />
            </i>
          </div>
        </div>
        <div className="search-container">
          <div className="box">
            <p>Location</p>
            <h4>
              {filterObj.location.charAt(0).toLocaleUpperCase() +
                filterObj.location.slice(1)}{' '}
              <div className="icon">
                <HiLocationMarker />
              </div>
            </h4>
          </div>
          <div className="box">
            <p>When</p>
            <h4>
              {filterObj.date}{' '}
              <div className="icon">
                <BsCalendar3 />
              </div>
            </h4>
          </div>
          <div className="box">
            <p>Price</p>
            <h4>
              ${filterObj.minPrice}-${filterObj.maxPrice}{' '}
              <div className="icon">
                <RiArrowDropDownLine />
              </div>
            </h4>
          </div>
          <div className="box">
            <p>Property Type</p>
            <h4>
              Houses{' '}
              <div className="icon">
                <RiArrowDropDownLine />
              </div>
            </h4>
          </div>
          <div className="box">
            <div
              className="btn"
              onClick={() => {
                setFilterObj(tempObj);
              }}
            >
              <h5>Search</h5>
            </div>
          </div>
        </div>
        <div className="card-container">
          {cards
            .filter(
              (card) =>
                card.type
                  .toUpperCase()
                  .includes(filterObj.type.toUpperCase()) &&
                card.price >= filterObj.minPrice &&
                card.price <= filterObj.maxPrice
            )
            .map((card, i) => (
              <div className="card">
                {card.name} {i + 1}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RentScreen;
