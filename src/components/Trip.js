import React from 'react';
import Tripdata from './TripData';
import './TripStyles.css';
import place5 from '../assets/Kutralam.jpg';
import place6 from '../assets/kanniyakumari.webp';
import place7 from '../assets/kerala.jpg';

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Explore our recent adventures and discover new travel inspirations.</p>
      <div className="tripcard">
        <Tripdata
          image={place5}
          attribute="Kutralam"
          heading="Trip in Kutralam"
          text="Enjoy the mesmerizing waterfalls and lush green surroundings in Kutralam, a perfect spot for nature lovers."
        />
        <Tripdata
          image={place6}
          attribute="Kanniyakumari"
          heading="Trip in Kanniyakumari"
          text="Witness the stunning sunrise and sunset at the southernmost tip of India, where three oceans meet."
        />
        <Tripdata
          image={place7}
          attribute="Kerala"
          heading="Trip in Kerala"
          text="Experience the serene backwaters, beautiful beaches, and vibrant culture of Kerala, God's Own Country."
        />
      </div>
    </div>
  );
};

export default Trip;
