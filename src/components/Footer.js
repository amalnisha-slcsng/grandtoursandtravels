import React from 'react';
import './FooterStyles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-title">GRAND Tours & Travels</h2>
          <p>
            Welcome to Grand Tours and Travels. We offer the best tour packages
            for honeymoon, family, friends, and more. Explore and enjoy your trips
            with us.
          </p>
        </div>

        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: grandtravelsmadurai@gmail.com</p>
          <p>Phone: +91 7598283292</p>
          <div className="socials">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://whatsapp.com"><i className="fab fa-whatsapp"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="grandtravelsmadurai@gmail.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Grand Tours and Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
