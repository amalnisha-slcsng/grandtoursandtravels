import React, { useState } from 'react';
import OutstationPackageComponent from '../components/OutstationPackageComponent';
import PerDayRentalComponent from '../components/PerDayRentalComponent';
import LocalPackageComponent from '../components/LocalPackageComponent';
import SearchBar from '../components/SearchBar'; // Import SearchBar component

const TravelPlan = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    return (
        <div>
            <h1>Travel Packages</h1>
            <LocalPackageComponent />
            <OutstationPackageComponent />
            <PerDayRentalComponent />
            {/* Add more components as needed */}
        </div>
    );
};

export default TravelPlan;
