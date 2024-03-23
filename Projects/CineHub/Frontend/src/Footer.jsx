import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Welcome to CineHub, your ultimate movie destination! As a college student passionate about films and entertainment, CineHub is my platform to share my love for cinema. Explore the magic of movies with us!</p>
        </div>

        <div className="footer-section contact">
          <h3>Contact Information</h3>
          <p>Email: avreetkaur084@gmai.com</p>
          <p>Phone: 9417983500</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2023 CineHub | Designed by Avreet Kaur
      </div>
    </footer>
  );
};

export default Footer;