// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { fetchTrendingMovies } from '../serviсe/Api';
// import css from './Home.module.css'

// const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     const getTrendingMovies = async () => {
//       try {
//         const movies = await fetchTrendingMovies();
//         setTrendingMovies(movies);
//       } catch (error) {
//         console.error('Помилка при отриманні трендових фільмів:', error);
//       }
//     };

//     getTrendingMovies();
//   }, []);

//   return (
//     <main>
//       <h1>Welcome</h1>
//       <ul className={css.list}>
//         {trendingMovies.map((movie) => (
//           <li key={movie.id} className={css.listItem}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTrendingMovies } from '../serviсe/Api';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Помилка при отриманні трендових фільмів:', error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      <ul className={css.list}>
        {trendingMovies.map((movie) => (
          <li key={movie.id} >
            <NavLink className={css.listItem} to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
