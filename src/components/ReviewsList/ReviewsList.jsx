import PropTypes from 'prop-types';
import { AuthorName, Comment } from './Reviews.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <ul className="list">
      {reviews.map(({ author, content }) => {
        return (
          <Comment key={author}>
            <AuthorName>Author:&ensp;{author}</AuthorName>
            <p>{content}</p>
          </Comment>
        );
      })}
    </ul>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.array,
};
