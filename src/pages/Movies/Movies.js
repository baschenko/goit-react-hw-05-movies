import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../service/api';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

const Movies = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  // const movieId = searchParam.get('query') ?? '';
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

  return (
    <>
      <div>Movies</div>
      <input type="text" value={query} onChange={updateQueryString} />
      <button type="button" onClick={onChangeQuery}>
        Search
      </button>
      {searchMovies !== null && (
        <ul>
          <MoviesItem hits={searchMovies} />
        </ul>
      )}
    </>
  );
};

export default Movies;
