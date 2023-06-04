
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../serviсe/Api';
import MoviesList from '../moviesList/Movieslist';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error getting trending movies:', error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      <MoviesList movies={trendingMovies} />
    </main>
  );
}

export default Home;
