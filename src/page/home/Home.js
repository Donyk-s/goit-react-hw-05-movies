import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../serviсe/Api';
import MoviesList from '../../components/moviesList/Movieslist';
import Loader from '../../components/loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(false); 
 
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        setIsLoading(false); 
      } catch (error) {
        setError(true); 
      }
    };
    getTrendingMovies();
  }, []);
  if (isLoading) {
    return <Loader />; 
  }
  if (error) {
    return <p>Error occurred while fetching trending movies.</p>; 
  }
  return (
    <main>
      <h1>Welcome</h1>
      <MoviesList movies={trendingMovies} />
    </main>
  );
}

export default Home;
