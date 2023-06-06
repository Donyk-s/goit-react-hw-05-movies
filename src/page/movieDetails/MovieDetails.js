import { useEffect, useState } from "react";
import { useParams, useLocation, Outlet, NavLink } from "react-router-dom";
import { fetchMovieDetails } from '../../serviсe/Api';
import { BiChevronsLeft } from "react-icons/bi"
import { Suspense } from "react";
import css from './MovieDetails.module.css'
import Loader from "components/loader/Loader";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const backLinkHref = location.state?.from ;
  const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';

  const getMovieById = async (id) => {
    try {
      const data = await fetchMovieDetails(id);
      return data;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      setError(false); 
      const movieData = await getMovieById(id);
      setMovie(movieData);
      setIsLoading(false); 
    };
    fetchMovie();
  }, [id]);
  if (isLoading) {
    return <Loader />; 
  }
  if (error) {
    return <p>Error occurred while fetching movie details.</p>; 
  }
  return (
    <main>
       <NavLink className={css.backLink} to={backLinkHref}>
        <BiChevronsLeft/>Return to the previous page</NavLink>
     
      <h1>{movie.title}</h1>
      
      <img
  src={
    movie && movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : defaultImg
  }
  width={500}
  alt="poster"
/>
      <p>Overview: {movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <ul className={css.detailsList}>
        <li >
          <NavLink className={css.detailsItems} 
          to={`/movies/${id}/cast`}
          state={{from: backLinkHref}}
          >Cast</NavLink>
        </li>
        <li>
          <NavLink className={css.detailsItems}
          to={`/movies/${id}/reviews`}
          state={{from: backLinkHref}}
          >Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}></Suspense>
      <Outlet />
    </main>
  );
};

export default MovieDetails;


