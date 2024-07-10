import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contactus from '../assets/contact.png';
import Footer from '../components/Footer';

const Contact = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const heroElement = document.querySelector('.hero-mid');
    if (heroElement) {
      const herobottom = heroElement.offsetHeight;
      if (window.scrollY > herobottom) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar sticky={sticky} />
      <Hero 
        cName="hero-mid"
        heroImg={Contactus} 
        title="Contact Us"
      />
      <Footer/>
    </>
  );
};

export default Contact;
