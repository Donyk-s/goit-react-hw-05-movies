import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from '../../serviсe/Api';
import Loader from "components/loader/Loader";

import css from './Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=400x250';

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchCast(id);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [id]);
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Sorry, we have a poblem...</p>;
  }

  return (
    <div>
      {cast ? (
        <ul className={css.castList}>
          {cast.map((actor) => (
            <li key={actor.cast_id}>
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
              {actor.profile_path ? (
                <img src={`https://image.tmdb.org/t/p/w400/${actor.profile_path}`} alt={actor.name} />
              ) : (
                <img src={defaultImg} alt={actor.name} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, there is no such information at the moment.</p>
      )}
    </div>
  );
};

export default Cast;
