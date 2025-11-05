import React, { useState, useCallback } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchResults = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/nutrition?query=${searchTerm}`,
        {
          headers: {
            'X-Api-Key': 'YOUR_API_KEY', // Replace with your actual API key
          },
        }
      );
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const debouncedFetchResults = useCallback(
    debounce(fetchResults, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFetchResults(value);
  };

  function debounce (fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(( )=> {
            fn(...args);
        }, delay);
    };
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for food..."
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>: {item.calories} kcal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
