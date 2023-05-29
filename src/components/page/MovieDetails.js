
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { fetchMovieDetails } from '../servise/Api';

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
  


//   useEffect(() => {
//     const getMovieDetails = async () => {
//       try {
//         const data = await fetchMovieDetails(id);
//         setMovie(data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };

//     getMovieDetails();
//   }, [id]);

//   if (!movie) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
      
//       <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//       <p>Overview: {movie.overview}</p>
//       <p>Rating: {movie.vote_average}</p>
//       <ul>
//         <li>
//           <Link to={`/movies/${id}/cast`}>Cast</Link>
//         </li>
//         <li>
//           <Link to={`/movies/${id}/reviews`}>Reviews</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default MovieDetails;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetails } from '../servise/Api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  
  // Опціонально визначаємо функцію getMovieById
  const getMovieById = async (id) => {
    try {
      const data = await fetchMovieDetails(id);
      return data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovieById(id);
      setMovie(movieData);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>Overview: {movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <ul>
        <li>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;


