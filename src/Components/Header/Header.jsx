import React, { useState } from 'react';
import './Header.css';
import { HiMailOpen } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiMenuAlt4 } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const search = useLocation();
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  const menuItems = [
    { title: 'rent' },
    { title: 'buy' },
    { title: 'sell' },
    {
      title: 'manage property',
      iconname: <RiArrowDropDownLine className="icon" />,
    },
    {
      title: 'resources',
      iconname: <RiArrowDropDownLine className="icon" />,
    },
  ];
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
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  style={
                    search.pathname === '/' + item.title
                      ? {
                          backgroundColor: '#eae4f7',
                          color: '#8a54f0',
                        }
                      : {}
                  }
                >
                  <a href="#">
                    <h5
                      style={
                        search.pathname === '/' + item.title
                          ? {
                              color: '#8a54f0',
                              textTransform: 'capitalize',
                            }
                          : { textTransform: 'capitalize' }
                      }
                    >
                      {item.title}
                      {item.iconname}
                    </h5>
                  </a>
                </li>
              ))}
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
