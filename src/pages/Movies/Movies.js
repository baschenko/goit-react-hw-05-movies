import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../service/api';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import styles from './Movies.module.css';

const Movies = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const reviews = await API.getSearchMovie(searchParam); //запрос на сервер АРІ
        setSearchMovies(reviews);
      } catch (error) {}
    }

    //HTTP запрос на мотирование
    getMovieInfo();
  }, [searchParam]);

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setQuery();
    }

    setQuery(movieIdValue);
  };

  const onChangeQuery = () => {
    setSearchParam({ query: query });
    setQuery('');
  };

  const onSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <input type="text" value={query} onChange={updateQueryString} />
        <button type="submit" onClick={onChangeQuery}>
          Search
        </button>
      </form>
      {searchMovies !== null && (
        <ul>
          <MoviesItem hits={searchMovies} />
        </ul>
      )}
    </div>
  );
};

export default Movies;
