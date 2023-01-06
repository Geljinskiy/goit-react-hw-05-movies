import FilmItem from 'components/FilmItem';
import { List } from './FilmsList.styled';

const FilmsList = ({ films }) => {
  return (
    <List className='list'>
      {films.map(film => {
        return (
          <li key={film.id}>
            <FilmItem filmName={film.title} id={film.id} />
          </li>
        );
      })}
    </List>
  );
};

export default FilmsList;
