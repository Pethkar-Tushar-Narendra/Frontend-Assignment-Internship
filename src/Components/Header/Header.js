import React, { useState } from 'react';
import './Header.css';
import { HiMailOpen } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiMenuAlt4 } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h3>
            <HiMailOpen className="icon" />
            Estatery
          </h3>
          <div className={menu ? 'menu active' : 'menu'}>
            <ul>
              <li>
                <a href="#">
                  <h5>Rent</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Buy</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Sell</h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>
                    Manage Property <RiArrowDropDownLine className="icon" />
                  </h5>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>
                    Resources <RiArrowDropDownLine className="icon" />
                  </h5>
                </a>
              </li>
            </ul>
            <div className="Buttons">
              <div className="btn btn-login">
                <h5>Login</h5>
              </div>
              <div className="btn btn-signup">
                <h5>Sign up</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={menu ? 'toggle active' : 'toggle'} onClick={toggle}>
          <HiMenuAlt4 className="icon1" />
          <GrFormClose className="icon2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
