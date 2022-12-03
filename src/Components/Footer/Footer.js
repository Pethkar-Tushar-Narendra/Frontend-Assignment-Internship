import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h5>
          Copyright 2022 &#174;{' '}
          <a href="#" target="_blank" style={{ textDecoration: 'underline' }}>
            Contact Me
          </a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
