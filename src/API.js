import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const PRIVATE_KEY = 'e298b9f3a180fda0d33ee7ea0fcf5236';
const TOP = 'trending/movie/week';
const SEARCH = '/search/movie';

export const getTopMovies = async () => {
  const geted = await axios.get(`${BASE_URL}${TOP}?api_key=${PRIVATE_KEY}`);
  return geted.data.results;
};

export const getMovieBySearch = async query => {
  const geted = await axios.get(
    `${BASE_URL}${SEARCH}?api_key=${PRIVATE_KEY}&query=${query}`
  );
  return geted.data.results;
};

export const getMovieDetails = async id => {
  const geted = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${PRIVATE_KEY}`
  );
  return geted.data;
};

export const getMovieActors = async id => {
  const geted = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${PRIVATE_KEY}`
  );
  return geted.data;
};

export const getMovieReviews = async id => {
  const geted = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${PRIVATE_KEY}`
  );
  return geted.data;
};
