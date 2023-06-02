import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from '../serviсe/Api';
import MoviesList from '../moviesList/Movieslist';
import { toast } from 'react-hot-toast';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams] = useSearchParams({});

  useEffect(() => {
    const query = searchParams.get("query");

    if (typeof query === 'string' && query.trim() !== '') {
      handleSearchSubmit(query);
    }
  }, [searchParams]);

  const handleSearchSubmit = async (query) => {
    try {
      const data = await fetchSearchMovies(query);
      const searchResults = Object.values(data.results);
      setMovies(searchResults);
    } catch (error) {
      console.error('Error searching movies:', error);
      toast.error('An error occurred while searching movies');
    }
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
   
      {movies && movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        movies !== null && <p>No movies found.</p>
      )}
    </div>
  );
}

export default Movies;
