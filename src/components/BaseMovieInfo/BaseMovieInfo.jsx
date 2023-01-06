import {
  ImageWrapper,
  Section,
  InfoWrapper,
  Span,
} from './BaseMovieInfo.styled';

const BaseMovieInfo = ({ filmInfo }) => {
  const { title, release_date, overview, genres, vote_average, poster_path } =
    filmInfo;
  return (
    <Section>
      <ImageWrapper>
        <img
          width="270px"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </ImageWrapper>
      <InfoWrapper>
        <h1>
          {title} ({release_date.slice(0, 4)})
        </h1>

        <Span>User Score: {Math.round(vote_average * 10)}%</Span>
        <h2>Overview</h2>
        <Span>{overview}</Span>
        <h2>Genres</h2>
        <Span>
          {genres.map(genre => (
            <span key={genre.id}>{genre.name}&ensp;</span>
          ))}
        </Span>
      </InfoWrapper>
    </Section>
  );
};

export default BaseMovieInfo;
