import React, { useState, useEffect } from "react";
import Searchbar from '../search/Search';
import { fetchSearchMovies } from '../servise/Api';

const Movies = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('searchQuery:', searchQuery);
    
    if (typeof searchQuery === 'string' && searchQuery.trim() !== '') {
      handleSearchSubmit(searchQuery);
    }
  }, [searchQuery]);

  const handleSearchSubmit = async (query) => {
    try {
      console.log('handleSearchSubmit:', query);
      
      const data = await fetchSearchMovies(query);
      const searchResults = data.results;
      setSearchResult(searchResults);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleSubmit = (value) => {
    console.log('handleSubmit:', value);
    
    setSearchQuery(value);
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <Searchbar onSubmit={handleSubmit} />

      {searchResult && (
        <div>
          <h2>Search Result:</h2>
          <ul>
            {searchResult.map((movie) => (
              <li key={movie.id}>
                {/* <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                /> */}
                <div>
                  <h3>{movie.title}</h3>
                  {/* <p>Rating: {movie.vote_average}</p> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Movies;

