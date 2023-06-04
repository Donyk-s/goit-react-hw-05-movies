import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from '../../serviсe/Api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const fetchedReviews = await fetchReviews(id);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    getReviews();
  }, [id]);

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
        <p>Loading reviews...</p>
      )}
    </div>
  );
};

export default Reviews;
