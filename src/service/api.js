import axios from 'axios';

const options = {
  method: 'GET',
  // url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWQ5OTNmM2EyZjlkOThhZTUyNjY1YzU3MTFmNGFiZSIsInN1YiI6IjY2MmFkODRmNWMwNzFiMDExZjVlMzc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rLVAAmb9wgXoqcUutJsdF_E9TvT3e0pPXYBi2Q9FDY4',
  },
};

export const getMovies = async () => {
  const response = await axios.request(
    'https://api.themoviedb.org/3/trending/movie/day',
    options
  );

  return response.data.results;
};

export const getMovieInfo = async movieId => {
  const response = await axios.request(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );

  return response.data;
};

export const getActorsMovie = async movieId => {
  const response = await axios.request(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );

  return response.data;
};

export const getReviewMovie = async movieId => {
  const response = await axios.request(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );

  return response.data;
};

export const getSearchMovie = async searchParam => {
  const response = await axios.request(
    `https://api.themoviedb.org/3/search/movie?${searchParam}`,
    options
  );

  return response.data.results;
};
