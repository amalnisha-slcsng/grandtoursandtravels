import React from 'react';

const SearchBar = ({ handleSearch }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search packages..."
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
