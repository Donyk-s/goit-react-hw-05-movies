// // // import React, { useEffect, useState } from 'react';
// // // import { fetchSearchMovies } from '../servise/Api';
// import Searchbar from '../search/Search';
//  const Movies = () => {
//   const handleSearchSubmit = (searchData) => {
   
//     console.log('Search result:', searchData);
  
//   };

//   return (
//     <div>
//       <h1>Welcome Home </h1>
//       <Searchbar onSubmit={handleSearchSubmit} />
  
//     </div>
//   );
// };
// export default Movies;

import { useState } from "react";
import Searchbar from '../search/Search';
import { fetchSearchMovies } from '../servise/Api';

const Movies = () => {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchSubmit = async (searchData) => {
    try {
      const data = await fetchSearchMovies(searchData);
      const searchResults = data.results; // Отримання результатів пошуку
      setSearchResult(searchResults); // Збереження результатів пошуку у стані компонента
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };
  

  return (
    <div>
      <h1>Welcome Home</h1>
      <Searchbar onSubmit={handleSearchSubmit} />

      {searchResult && (
        <div>
          <h2>Search Result:</h2>
          <ul>
            {searchResult.results.map((movie) => (
              <li key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <h3>{movie.title}</h3>
                  <p>Rating: {movie.vote_average}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
