import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

 const MoviesList = ({ movies }) => {

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title }
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default MoviesList