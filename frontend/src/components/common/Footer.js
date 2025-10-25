import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Red Valley Apartment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;