import React, { useState } from 'react';
import './RentScreen.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsCalendar3 } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import cards from '../../Testing Data/Data';
import PricePopup from '../../Components/Filter Popups/Price Popup/PricePopup';
import PropTypePopup from '../../Components/Filter Popups/PropTypePopup/PropTypePopup';
import LocationPopup from '../../Components/Filter Popups/Location Popup/LocationPopup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Card from '../../Components/Card/Card';
const RentScreen = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [propertyType, setPropertyType] = useState('');
  const [filterObj, setFilterObj] = useState({
    location,
    date,
    minPrice,
    maxPrice,
    propertyType,
  });
  const [propertyTypeIsOpen, setPropertyTypeIsOpen] = useState(false);
  const [locationIsOpen, setLocationIsOpen] = useState(false);
  const [priceIsOpen, setPriceIsOpen] = useState(false);
  const [dateIsOpen, setDateIsOpen] = useState(false);
  const propertyTypeToggle = () => {
    setPropertyTypeIsOpen(!propertyTypeIsOpen);
    setLocationIsOpen(false);
    setPriceIsOpen(false);
    setDateIsOpen(false);
  };
  const priceToggle = () => {
    setPriceIsOpen(!priceIsOpen);
    setLocationIsOpen(false);
    setPropertyTypeIsOpen(false);
    setDateIsOpen(false);
  };
  const locationToggle = () => {
    setPriceIsOpen(false);
    setLocationIsOpen(!locationIsOpen);
    setPropertyTypeIsOpen(false);
    setDateIsOpen(false);
  };
  const cardsInPage = 6;
  const [pageNo, setPageNo] = useState(1);
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
            <h4 onClick={locationToggle}>
              {location === ''
                ? 'Select Location'
                : location.charAt(0).toLocaleUpperCase() +
                  location.slice(1)}{' '}
              <div className="icon">
                {locationIsOpen ? <GrFormClose /> : <HiLocationMarker />}
              </div>
            </h4>
            <div
              className="popup"
              style={locationIsOpen ? { display: 'flex' } : { display: 'none' }}
            >
              <LocationPopup
                cards={cards}
                setLocation={setLocation}
                locationToggle={locationToggle}
              />
            </div>
          </div>
          <div className="box">
            <p>Move-in Date</p>
            <h4>
              <DatePicker
                className="datepicker1"
                selected={date}
                onChange={(date) => setDate(date)}
                minDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
              />
              <div className="icon datepicker">
                <BsCalendar3 />
              </div>
            </h4>
          </div>
          <div className="box">
            <p>Price</p>
            <h4 onClick={priceToggle}>
              ${minPrice}-${maxPrice}{' '}
              <div className="icon">
                {priceIsOpen ? <GrFormClose /> : <RiArrowDropDownLine />}
              </div>
            </h4>
            <div
              className="popup"
              style={priceIsOpen ? { display: 'flex' } : { display: 'none' }}
            >
              <PricePopup
                cards={cards}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
                priceToggle={priceToggle}
              />
            </div>
          </div>
          <div className="box">
            <p>Property Type</p>
            <h4 onClick={propertyTypeToggle}>
              {propertyType === '' ? 'Select Type' : propertyType}{' '}
              <div className="icon">
                {propertyTypeIsOpen ? <GrFormClose /> : <RiArrowDropDownLine />}
              </div>
            </h4>
            <div
              className="popup"
              style={
                propertyTypeIsOpen ? { display: 'flex' } : { display: 'none' }
              }
            >
              <PropTypePopup
                cards={cards}
                setPropertyType={setPropertyType}
                propertyTypeToggle={propertyTypeToggle}
              />
            </div>
          </div>
          <div className="box">
            <div
              className="btn"
              onClick={() => {
                setFilterObj({
                  location,
                  date,
                  minPrice,
                  maxPrice,
                  propertyType,
                });
              }}
            >
              <h5>Search</h5>
            </div>
          </div>
        </div>
        <div className="card-container">
          {cards
            .filter(
              (card, i) =>
                i >= (pageNo - 1) * cardsInPage &&
                i < pageNo * cardsInPage &&
                card.type
                  .toUpperCase()
                  .includes(filterObj.propertyType.toUpperCase()) &&
                card.price >= filterObj.minPrice &&
                card.price <= filterObj.maxPrice &&
                card.location
                  .toUpperCase()
                  .includes(filterObj.location.toUpperCase()) &&
                card.date.getTime() >= filterObj.date.getTime()
            )
            .map((card, i) => (
              <div className="card" key={i}>
                <Card card={card} />
              </div>
            ))}
        </div>
        <div className="pageNo">
          <div
            className="btn"
            onClick={() => {
              if (pageNo > 1) setPageNo(pageNo - 1);
            }}
          >
            <BiMinus className="icon" />
          </div>
          <p>Page No:</p>
          <h4>{pageNo}</h4>
          <div
            className="btn"
            onClick={() => {
              if (pageNo < Math.ceil(cards.length / cardsInPage))
                setPageNo(pageNo + 1);
            }}
          >
            <BiPlus className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentScreen;
