import { useEffect, useState } from 'react';
import * as API from '../../service/api';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await API.getMovies(); //запрос на сервер АРІ
        setMovies(movies);
      } catch (error) {}
    }
    //HTTP запрос на мотирование
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies !== null && (
        <ul>
          <MoviesItem hits={movies} />
        </ul>
      )}
    </div>
  );
};

export default Home;
