import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../../service/api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const movie = await API.getMovieInfo(movieId); //запрос на сервер АРІ
        setMovie(movie);
      } catch (error) {}
    }

    //HTTP запрос на мотирование
    getMovieInfo();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <Link to={backLinkLocationRef.current}>
        <button type="button" className={styles.btn}>
          👈 Go Back
        </button>
      </Link>
      {movie && (
        <>
          <div className={styles.header}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.tagline}
              width="280"
              className={styles.image}
            />
            <div>
              <h1>{movie.original_title}</h1>
              <p>User Score: {Math.ceil(movie.vote_average * 10)} %</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>{movie.genres.map(genre => `${genre.name} `)}</p>
            </div>
          </div>
          <p>Additional information</p>
          <ul className={styles.block}>
            <li>
              <Link to="cast">cast</Link>
            </li>
            <li>
              <Link to="reviews">reviews</Link>
            </li>
          </ul>
        </>
      )}
      <Suspense fallback={<div>Loading Subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
