import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroImg from '../assets/homo.avif';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Tour from '../components/Tour';
import MostVisitedPlaces from '../components/MostVisitedPlaces';
import CustomerReviewComponent from '../components/CustomerReviewComponent';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="Explore and Enjoy Your Trips"
        text="Discover amazing destinations with Grand Tours and Travels."
        buttonText="Travel Package"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Tour />
      <MostVisitedPlaces />
      <CustomerReviewComponent/>
      <Footer />
    </>
  );
};

export default Home;
