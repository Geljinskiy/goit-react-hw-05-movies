import { useLocation } from 'react-router-dom';
import { MovieLink } from './FilmItem.styled';
import PropTypes from 'prop-types';

const FilmItem = ({ filmName, id }) => {
  const loc = useLocation();
  return (
    <MovieLink to={`/movies/${id}`} state={{ from: loc }}>
      {filmName}
    </MovieLink>
  );
};

export default FilmItem;

FilmItem.propTypes = {
  filmName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
