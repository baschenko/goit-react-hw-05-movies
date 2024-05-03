import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../service/api';
import styles from './Cast.module.css';
import imagesDefault from '../../default.png'

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState();
  // useEffect(() => {

  // //HTTP запрос на мотирование
  // }, []);

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const actors = await API.getActorsMovie(movieId); //запрос на сервер АРІ
        setActors(actors);
      } catch (error) {}
    }

    //HTTP запрос на монтирование
    getMovieInfo();
  }, [movieId]);

  console.log('actors:', actors);

  return (
    <>
      {actors && (
        <>
          <div>Cast: {movieId}</div>
          <ul className={styles.castList}>
            {actors.cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={actor.profile_path !== null ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`: imagesDefault}
                  alt={actor.name}
                //   width="180"
                  height="270"
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Cast;
