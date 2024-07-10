import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/homee.avif';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const About = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const heroElement = document.querySelector('.hero-mid');
    if (heroElement) {
      const heroHeight = heroElement.offsetHeight;
      if (window.scrollY > heroHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('.hero-mid');
      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        if (window.scrollY > heroHeight) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

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
        heroImg={AboutImg} 
        title="About Us"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
