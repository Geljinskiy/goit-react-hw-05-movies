import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as api from '../../API';

import FilmsList from 'components/FilmsList';
import MovieSearch from 'components/MovieSearch';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [films, setFilms] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchFilms = async () => {
      try {
        const getedFilms = await api.getMovieBySearch(query);
        setFilms(getedFilms);
      } catch (error) {
        console.log('error :', error);
      }
    };
    fetchFilms();
  }, [query]);

  const onSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div className="container">
      <MovieSearch onSubmit={onSubmit} prevQuery={query} />
      {films && <FilmsList films={films} />}
    </div>
  );
};

export default Movies;
