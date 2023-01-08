import CastList from 'components/CastList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as api from '../../API';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const getActors = await api.getMovieActors(id);
        setActors(getActors.cast);
      } catch (error) {
        console.log('error :', error);
      }
    };
    fetchActors();
  }, [id]);

  return (
    <div className="container">
      <CastList actors={actors} />
    </div>
  );
};

export default Cast;
