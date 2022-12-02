import React from 'react';
import Header from '../../Components/Header/Header';
import RentScreen from '../Rent/RentScreen';
import './Homescreen.css';
const Homescreen = () => {
  return (
    <div className="container">
      <Header />
      <RentScreen />
      {/* <div style={{ display: 'flex' }}>
        h1:<h1>Searech Propeties to rent</h1>
      </div>
      <div style={{ display: 'flex' }}>
        h2:<h2>Palm Harbor</h2>
      </div>
      <div style={{ display: 'flex' }}>
        h3:<h3>Estatary</h3>
      </div>
      <div style={{ display: 'flex' }}>
        h4:<h4>Buy</h4>
      </div>
      <div style={{ display: 'flex' }}>
        p:<p>2699 Green Valley, Highland Lake,FL</p>
      </div> */}
    </div>
  );
};

export default Homescreen;
