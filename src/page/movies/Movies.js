import React, { useState, useEffect,  useCallback} from "react";
import {  useParams, useSearchParams,  } from "react-router-dom";
import { fetchSearchMovies } from '../../serviсe/Api';
import MoviesList from '../../components/moviesList/Movieslist';
import { toast } from 'react-hot-toast';
import SearchForm from '../../components/searchForm/SearchForm';
import Loader from "components/loader/Loader";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(false); 
  


  const handleSearchSubmit = useCallback(async (query) => {
    setIsLoading(true); 
    setError(false); 

    try {
      const data = await fetchSearchMovies(query);
      const searchResults = Object.values(data.results);
      setMovies(searchResults);
      setSearchParams({ query });
    } catch (error) {
      console.error('Error searching movies:', error);
      toast.error('An error occurred while searching movies');
      setError(true); 
    } finally {
      setIsLoading(false);
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
   
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong</p>}
      {movies && movies.length > 0 && <MoviesList movies={movies} />}
      {movies !== null && movies.length === 0 && <p>No movies found...</p>}
    </div>
  );
}

export default Movies;


