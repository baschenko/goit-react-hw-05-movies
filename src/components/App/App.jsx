import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { lazy, useState } from 'react';
import { Container } from './App.styled';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export const App = () => {
  const [tag, setTag] = useState(false);
  return (
    <div style={containerStyles}>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                onChange={() => {
                  setTag(!tag);
                }}
                options={tag}
              />
            }
          >
            <Route index element={<Home options={tag} />} />
            <Route path="movies" element={<Movies options={tag} />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </div>
  );
};
