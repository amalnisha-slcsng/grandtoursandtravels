// src/components/SocialMediaIcons.js
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './SocialMediaIcons.css'; // Import your CSS file for styling

const SocialMediaIcons = () => {
  const handleOpenLink = (url) => {
    window.open(url, '_blank'); // Open link in a new tab
  };

  return (
    <div className="social-icons">
      <div className="social-icon" onClick={() => handleOpenLink('https://www.facebook.com')}>
        <FaFacebook />
      </div>
      <div className="social-icon" onClick={() => handleOpenLink('https://www.instagram.com')}>
        <FaInstagram />
      </div>
      <div className="social-icon" onClick={() => handleOpenLink('https://wa.me/yourphonenumber')}>
        <FaWhatsapp />
      </div>
      <div className="social-icon" onClick={() => handleOpenLink('mailto:youremail@gmail.com')}>
        <FaEnvelope />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
