import React, { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../servise/Api';
import { Searchbar } from '../search/Search';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);

  const getSearchMovies = async (query) => {
    try {
      const movies = await fetchSearchMovies(query);
      setSearchMovies(movies);
    } catch (error) {
      console.error('Помилка при отриманні фільмів:', error);
    }
  };

  useEffect(() => {
    getSearchMovies('');
  }, []);

  return (
    <div>
      <h1>Welcome Home Honey</h1>
      <Searchbar onSubmit={getSearchMovies} />
      {/* {searchMovies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
       
      ))} */}
    </div>
  );
};
