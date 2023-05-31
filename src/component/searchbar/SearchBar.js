import React, { useState } from 'react';
import './SearchBar.css'
const SearchBar = ({ onSearch }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSearchTerm('');
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(selectedOption, searchTerm);
    };

    return (
        <>
           <p className="filter-description">Filter the data using all fields</p>
            <div className="search-bar">
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="">Select an option</option>
                    <option value="email">Email</option>
                    <option value="age">Age</option>
                    <option value="name">Name</option>
                    <option value="gender">Gender</option>
                </select>
                {selectedOption && (
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder={`Search by ${selectedOption}`}
                    />
                )}
                <button onClick={handleSearch} disabled={!selectedOption}>
                    Search
                </button>
            </div>
        </>

    );
};

export default SearchBar;
