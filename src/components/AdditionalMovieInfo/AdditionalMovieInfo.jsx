import { InfLink, InfItem, Section, List } from './AdditionalMovieInfo.styled';

const AdditionalMovieInfo = () => {
  return (
    <Section>
      <h2>Additional information</h2>
      <List className="list">
        <InfItem>
          <InfLink to={'cast'}>Cast</InfLink>
        </InfItem>
        <InfItem>
          <InfLink to={'reviews'}>Reviews</InfLink>
        </InfItem>
      </List>
    </Section>
  );
};

export default AdditionalMovieInfo;
