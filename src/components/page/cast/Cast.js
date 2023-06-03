import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from '../../serviсe/Api';
import css from './Cast.module.css'

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchCast(id);
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };
  
    getCast();
  }, [id]);
  

  return (
    <div>
      {cast ? (
        <ul className={css.castList}>
          {cast.map((actor) => (
            <li key={actor.cast_id}>
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
              {actor.profile_path && (
                <img src={`https://image.tmdb.org/t/p/w400/${actor.profile_path}`} alt={actor.name} />
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
