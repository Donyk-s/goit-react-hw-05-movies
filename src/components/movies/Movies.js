import React, { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from '../../serviсe/Api';
import MoviesList from '../moviesList/Movieslist';
import { toast } from 'react-hot-toast';
import SearchForm from '../searchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { movieId } = useParams();

  const handleSearchSubmit = useCallback(async (query) => {
    try {
      const data = await fetchSearchMovies(query);
      const searchResults = Object.values(data.results);
      setMovies(searchResults);
      setSearchParams({ query });
    } catch (error) {
      console.error('Error searching movies:', error);
      toast.error('An error occurred while searching movies');
    }
  }, [setSearchParams]);


  useEffect(() => {
    const query = searchParams.get("query");

    if (movieId && typeof query === 'string' && query.trim() !== '') {
      handleSearchSubmit(query);
    }
  }, [movieId, searchParams, handleSearchSubmit]);

  return (
    <div>
      <h1>Welcome!</h1>
      <SearchForm onSubmit={handleSearchSubmit} />
   
      {movies && movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        movies !== null && <p>no movies found...</p>
      )}
    </div>
  );
}

export default Movies;


