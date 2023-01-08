import { ActorName, ActorRole, List, ImageWrapper } from './CastList.styled';
import PropTypes from 'prop-types';

const CastList = ({ actors }) => {
  return (
    <List className="list">
      {actors.map(({ name, character, profile_path }) => {
        return (
          <li key={name}>
            <ImageWrapper>
              <img
                width="200"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://via.placeholder.com/200x298/?text=Image+not+found'
                }
                alt={name}
              />
            </ImageWrapper>
            <ActorName>{name}</ActorName>
            <ActorRole>Character:&ensp;{character}</ActorRole>
          </li>
        );
      })}
    </List>
  );
};

export default CastList;

CastList.propTypes = {
  actors: PropTypes.array.isRequired,
};
