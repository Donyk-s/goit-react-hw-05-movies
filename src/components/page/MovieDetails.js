import { useEffect, useState } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { fetchMovieDetails } from '../serviсe/Api';
import { BiChevronsLeft } from "react-icons/bi"
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

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
    <main>
       <Link to={backLinkHref}>
        <BiChevronsLeft/>Back to Home page</Link>
     
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
      <Outlet />
    </main>
  );
};

export default MovieDetails;


