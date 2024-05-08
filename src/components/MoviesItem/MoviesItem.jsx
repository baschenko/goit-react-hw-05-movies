import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import imagesDefault from '../../default.png';
import styles from './MoviesItem.module.css';

export const MoviesItem = ({ hits, options }) => {
  const location = useLocation();
  return hits.map(hit =>
    options === true ? (
      <li key={hit.id} className={styles.item}>
        <Link
          className={styles.link}
          state={{ from: location }}
          to={`/movies/${hit.id}`}
        >
          <img
            src={
              hit.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${hit.poster_path}`
                : imagesDefault
            }
            alt={hit.title}
            height="280"
            className={styles.img}
          />
          <h2 className={styles.title}>{hit.title}</h2>
          <p className={styles.text}>Rating: {Math.ceil(hit.vote_average)}</p>
        </Link>
      </li>
    ) : (
      <li key={hit.id}>
        <Link state={{ from: location }} to={`/movies/${hit.id}`}>
          {hit.title}
        </Link>
      </li>
    )
  );
};

MoviesItem.propTypes = {
  hits: PropTypes.array.isRequired,
};
