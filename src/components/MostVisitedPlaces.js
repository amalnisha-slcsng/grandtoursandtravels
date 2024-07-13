import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './MostVisitedPlaces.css';
import sollavanthanImage from '../assets/sollavanthan.jpg';
import kovalamImage from '../assets/kovalam.jpg';
import rameshwaramImage from '../assets/rameshwaram.webp';
import trivandrumImage from '../assets/trivandrum.jpg';
import palaniImage from '../assets/palani.jpg';
import coimbatoreImage from '../assets/coimbatorr.jpg';
import salemImage from '../assets/salem.webp';
import tiruchirappalliImage from '../assets/tiruchirappalli.jpg';
import tirunelveliImage from '../assets/tirunelvel.jpeg';
import thanjavurImage from '../assets/thanjavur.webp';
import trichyImage from '../assets/trichy.jpg';
import dindigulImage from '../assets/dindigul.jpg';
import maduraiImage from '../assets/maduraii.jpg'; // Add Madurai image import
import alaganalurImage from '../assets/allaganallur.jpeg'; // Add Alaganalur image import
import chennaiImage from '../assets/chennai.jpg'; // Add Chennai image import

const MostVisitedPlaces = () => {
  const placesRef = useRef(null);

  const places = [
    { image: maduraiImage, heading: 'Madurai', text: 'Rich in cultural heritage.', path: '/madurai' },
    { image: chennaiImage, heading: 'Chennai', text: 'The vibrant capital of Tamil Nadu.', path: '/chennai' },
    { image: coimbatoreImage, heading: 'Coimbatore', text: 'Known for its textiles.', path: '/coimbatore' },
    { image: salemImage, heading: 'Salem', text: 'Famous for its mangoes.', path: '/salem' },
    { image: rameshwaramImage, heading: 'Rameshwaram', text: 'A holy pilgrimage site.', path: '/rameshwaram' },
    { image: tiruchirappalliImage, heading: 'Tiruchirappalli', text: 'Home to Rockfort Temple.', path: '/tiruchirappalli' },
    { image: trivandrumImage, heading: 'Trivandrum', text: 'The capital of Kerala.', path: '/trivandrum' },
    { image: palaniImage, heading: 'Palani', text: 'Known for its Murugan Temple.', path: '/palani' },
    { image: tirunelveliImage, heading: 'Tirunelveli', text: 'Famous for halwa.', path: '/tirunelveli' },
    { image: thanjavurImage, heading: 'Thanjavur', text: 'Renowned for Brihadeeswara Temple.', path: '/thanjavur' },
    { image: trichyImage, heading: 'Trichy', text: 'Known for its educational institutions.', path: '/trichy' },
    { image: dindigulImage, heading: 'Dindigul', text: 'Famous for locks and biryani.', path: '/dindigul' },
    { image: kovalamImage, heading: 'Kovalam', text: 'Known for its beautiful beaches.', path: '/kovalam' },
    { image: sollavanthanImage, heading: 'Sollavanthan', text: 'A charming village.', path: '/sollavanthan' },
    { image: alaganalurImage, heading: 'Alaganalur', text: 'Known for its serene environment.', path: '/alaganalur' },
  ];

  const scrollLeft = () => {
    placesRef.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    placesRef.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="most-visited-places">
      <h1>Most Visited Places</h1>
      <div className="place-cards" ref={placesRef}>
        {places.map((place, index) => (
          <Link to={place.path} key={index} className="place-card">
            <div className="place-image">
              <img src={place.image} alt={place.heading} />
            </div>
            <h4>{place.heading}</h4>
            <p>{place.text}</p>
          </Link>
        ))}
      </div>
      <div className="arrow arrow-left" onClick={scrollLeft}>
        &#8592;
      </div>
      <div className="arrow arrow-right" onClick={scrollRight}>
        &#8594;
      </div>
    </div>
  );
};

export default MostVisitedPlaces;
