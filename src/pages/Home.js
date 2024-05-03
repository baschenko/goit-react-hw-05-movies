import { useEffect, useState } from 'react';
import * as API from '../service/api';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { useLocation } from 'react-router-dom';



const Home = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await API.getMovies(); //запрос на сервер АРІ
        setMovies(movies);
        console.log('movies:', movies);
      } catch (error) {}
    }
  console.log('запус эфекта на Home');
    //HTTP запрос на мотирование
    getMovies();
  }, []);

console.log('location_Home:', location);

  return (
    <div>
      Trending today
      {movies !== null && (
        <ul>
          <MoviesItem hits={movies} />
        </ul>
      )}
    </div>
  );
};

export default Home;
