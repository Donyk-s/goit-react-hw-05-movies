import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from '../../serviсe/Api';
import Loader from '../../components/loader/Loader';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const fetchedReviews = await fetchReviews(id);
        setReviews(fetchedReviews);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [id]);
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error occurred while fetching reviews.</p>;
  }
  return (
    <div>
      <h2>Reviews:</h2>
      {reviews ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
