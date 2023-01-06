import ReviewsList from 'components/ReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as api from '../../API';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      (async () => {
        const fetchReviews = await api.getMovieReviews(id);
        setReviews(fetchReviews.results);
      })();
    } catch (error) {
      console.log('error :', error);
    }
  }, [id]);

  return (
    <div className="container">
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
