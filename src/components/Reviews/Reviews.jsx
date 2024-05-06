import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const reviews = await API.getReviewMovie(movieId); //запрос на сервер АРІ
        setReviews(reviews);
      } catch (error) {}
    }

    //HTTP запрос на мотирование
    getMovieInfo();
  }, [movieId]);

  return (
    <>
      {reviews &&
        (reviews.total_results === 0 ? (
          `We don't have any review for this movie`
        ) : (
          <>
            <ul>
              {reviews.results.map(review => (
                <li key={review.id}>
                  <h2>{review.author}</h2>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          </>
        ))}
    </>
  );
};

export default Reviews;
