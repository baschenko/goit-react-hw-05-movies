import { useEffect, useState } from 'react';
import * as API from '../../service/api';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import styles from './Home.module.css';

const Home = ({ options }) => {
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
        <ul className={options ? styles.castList : ''}>
          <MoviesItem hits={movies} options={options} />
        </ul>
      )}
    </div>
  );
};

export default Home;
