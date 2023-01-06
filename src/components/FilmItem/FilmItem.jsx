import { useLocation } from 'react-router-dom';
import { MovieLink } from './FilmItem.styled';

const FilmItem = ({ filmName, id }) => {
  const loc = useLocation();
  return (
    <MovieLink to={`/movies/${id}`} state={{ from: loc }}>
      {filmName}
    </MovieLink>
  );
};

export default FilmItem;
