import FilmsList from 'components/FilmsList';
import * as api from '../../API';
import { useState, useEffect } from 'react';

const Home = () => {
  const [topFilms, setTopFilms] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const getedFilms = await api.getTopMovies();
        setTopFilms(getedFilms);
      } catch (error) {
        console.log('error :', error);
      }
    })();
  }, []);

  return (
    <div className='container'>
      <h1>Trending today</h1>
      {topFilms && <FilmsList films={topFilms} />}
    </div>
  );
};

export default Home;
