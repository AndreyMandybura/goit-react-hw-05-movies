import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api-services';
import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>No reviews yet</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id} className={s.item}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
