import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Service from '../assets/homo.avif';
import Footer from '../components/Footer';

const Services = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const heroElement = document.querySelector('.hero-mid');
    if (heroElement) {
      const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
      if (window.scrollY > heroBottom) {
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
        heroImg={Service} 
        title="Our Services"
      />
      <Footer />
    </>
  );
};

export default Services;
