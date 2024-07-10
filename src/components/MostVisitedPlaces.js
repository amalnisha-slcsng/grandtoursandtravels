import React, { useRef } from 'react';
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

const MostVisitedPlaces = () => {
  const placesRef = useRef(null);

  const places = [
    { image: coimbatoreImage, heading: 'Coimbatore', text: 'Known for its textiles.' },
    { image: salemImage, heading: 'Salem', text: 'Famous for its mangoes.' },
    { image: rameshwaramImage, heading: 'Rameshwaram', text: 'A holy pilgrimage site.' },
    { image: tiruchirappalliImage, heading: 'Tiruchirappalli', text: 'Home to Rockfort Temple.' },
    { image: trivandrumImage, heading: 'Trivandrum', text: 'The capital of Kerala.' },
    { image: palaniImage, heading: 'Palani', text: 'Known for its Murugan Temple.' },
    { image: tirunelveliImage, heading: 'Tirunelveli', text: 'Famous for halwa.' },
    { image: thanjavurImage, heading: 'Thanjavur', text: 'Renowned for Brihadeeswara Temple.' },
    { image: trichyImage, heading: 'Trichy', text: 'Known for its educational institutions.' },
    { image: dindigulImage, heading: 'Dindigul', text: 'Famous for locks and biryani.' },
    { image: kovalamImage, heading: 'Kovalam', text: 'Known for its beautiful beaches.' },
    { image: sollavanthanImage, heading: 'Sollavanthan', text: 'A charming village.' },
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
          <div className="place-card" key={index}>
            <div className="place-image">
              <img src={place.image} alt={place.heading} />
            </div>
            <h4>{place.heading}</h4>
            <p>{place.text}</p>
          </div>
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
