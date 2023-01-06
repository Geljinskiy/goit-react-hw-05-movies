import { ActorName, ActorRole, List, ImageWrapper } from './CastList.styled';

const CastList = ({ actors }) => {
  return (
    <List className="list">
      {actors.map(({ name, character, profile_path }) => {
        return (
          <li key={name}>
            <ImageWrapper>
              <img
                width="200"
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
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
