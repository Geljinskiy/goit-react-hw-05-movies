import ReviewsList from 'components/ReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as api from '../../API';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const getedReviews = await api.getMovieReviews(id);
        setReviews(getedReviews.results);
      } catch (error) {
        console.log('error :', error);
      }
    };
    fetchReviews();
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
