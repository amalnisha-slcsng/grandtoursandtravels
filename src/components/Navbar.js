import React, { useState } from 'react';
import './Navbarstyles.css'; // Assuming it's your Navbar styles
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import logo from '../assets/logo.jpg'; // Import your logo image

const Navbar = ({ sticky }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={`NavbarItems ${sticky ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Grand Tours & Travels Logo" className="logo-img" />
        <div className="large-screen-only">
  
          <span className="highlight" style={{color:"#0c6d70",padding:"4px"}}>GRAND</span>
          <span className="nav-title">Tours & Travels</span>
        </div>
      </div>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName} onClick={handleClick}>
              <i className={item.icon}></i>{item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
