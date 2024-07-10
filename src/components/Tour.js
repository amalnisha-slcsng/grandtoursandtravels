import React, { useEffect, useRef } from 'react';
import './TourStyles.css';
import TourCard from './Tourcard';
import familyImage from '../assets/family.jpg';
import friendsImage from '../assets/friends.jpg';
import templesImage from '../assets/templess.jpg';
import keralaImage from '../assets/keralas.png';
import kanniyakumariImage from '../assets/kanniyakumari.webp';
import maduraiImage from '../assets/maduraii.jpg';
import chennaiImage from '../assets/chennai.jpg';
import coimbatoreImage from '../assets/coimbatore.jpg';
import mosqueImage from '../assets/mosque.jpg';
import bachelorImage from '../assets/bachelor.jpg';
import honeymoonImage from '../assets/honeymoon.jpg';


const Tour = () => {
  const tourCardsRef = useRef(null);

  const tourPackages = [
    { image: bachelorImage, heading: 'Bachelor Tour Package', text: 'Perfect for a bachelor getaway.' },
    { image: chennaiImage, heading: 'Chennai Tour Package', text: 'Explore the vibrant city of Chennai.' },
    { image: coimbatoreImage, heading: 'Coimbatore Tour Package', text: 'Discover the beauty of Coimbatore.' },
    { image: mosqueImage, heading: 'Mosque Tour Package', text: 'Visit famous mosques and experience the spiritual essence.' },
    { image: maduraiImage, heading: 'Madurai Tour Package', text: 'Explore the rich cultural heritage and historic temples of Madurai.' },
    { image: honeymoonImage, heading: 'Honeymoon Tour Package', text: 'Experience romantic getaways with our special honeymoon packages.' },
    { image: familyImage, heading: 'Family Tour Package', text: 'Enjoy quality family time with our exclusive family tour packages.' },
    { image: friendsImage, heading: 'Friends Tour Package', text: 'Have fun and create memories with friends on our friends tour packages.' },
    { image: templesImage, heading: 'Temples Tour Package', text: 'Explore spiritual destinations with our temples tour packages.' },
    { image: keralaImage, heading: 'Kerala Tour Package', text: 'Discover the beauty of Kerala with our comprehensive tour packages.' },
    { image: kanniyakumariImage, heading: 'Kanyakumari Tour Package', text: 'Visit the southernmost tip of India with our Kanyakumari tour packages.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (tourCardsRef.current) {
        tourCardsRef.current.scrollBy({
          left: 300,
          behavior: 'smooth',
        });
        if (tourCardsRef.current.scrollLeft + tourCardsRef.current.offsetWidth >= tourCardsRef.current.scrollWidth) {
          tourCardsRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tour">
      <h1>Tour Packages</h1>
      <div className="tour-cards" ref={tourCardsRef}>
        {tourPackages.map((packageData, index) => (
          <TourCard key={index} image={packageData.image} heading={packageData.heading} text={packageData.text} />
        ))}
      </div>
    </div>
  );
};

export default Tour;
