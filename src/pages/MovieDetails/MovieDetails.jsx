import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import * as api from '../../API';

import BaseMovieInfo from 'components/BaseMovieInfo';
import AdditionalMovieInfo from 'components/AdditionalMovieInfo';
import BackLink from 'components/BackLink';

const MovieDetails = ({ movieId }) => {
  const [filmInfo, setFilmInfo] = useState(null);

  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    try {
      (async () => {
        const filmInfo = await api.getMovieDetails(id);
        setFilmInfo(filmInfo);
      })();
    } catch (error) {
      console.log('error :', error);
    }
  }, [id]);

  return (
    <>
      <div className="container">
        <BackLink to={backLinkHref}>« Back</BackLink>
        {filmInfo && <BaseMovieInfo filmInfo={filmInfo} />}
        <AdditionalMovieInfo />
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
