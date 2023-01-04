import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { movieReviews } from 'components/services/api';
import { List, Item, Author, Review, Nothing } from './Review.styled';

export const Reviews = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchReview = async () => {
      try {
        const {results} = await movieReviews(movieId);
        setReview(results);
        setResult(true);
      } catch (error) {
        setError(error.message);
        setResult(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReview();
  }, [movieId]);


  return (
    <>
      {isLoading && 'Waiting for'}
      {result === false && <p>We don't have any reviews for this movies</p>}
      <List>
        {result === true &&
          review.map(({ id, author, content }) => (
            <Item key={id}>
              <Author>Author: {author}</Author>
              <Review>{content}</Review>
            </Item>
          ))}
      </List>
      {review.length === 0 && (
        <Nothing>We dont have any reviews for this movie</Nothing>
      )}
    </>
  );
};

Reviews.propTypes = {
  review: PropTypes.array,
  error: PropTypes.any,
  isLoading: PropTypes.bool,
  result: PropTypes.bool,
};
