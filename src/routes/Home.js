import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroImg from '../assets/homo.avif';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Tour from '../components/Tour';
import MostVisitedPlaces from '../components/MostVisitedPlaces';
import Footer from '../components/Footer';

const Home = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const heroElement = document.querySelector('.hero');
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
        cName="hero"
        heroImg={HeroImg}
        title="Explore and Enjoy Your Trips"
        text="Discover amazing destinations with Grand Tours and Travels."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Tour />
      <MostVisitedPlaces />
      <Footer />
    </>
  );
};

export default Home;
