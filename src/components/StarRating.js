import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} className="bi bi-star-fill text-warning"></span>
      );
    } else {
      stars.push(
        <span key={i} className="bi bi-star text-secondary"></span>
      );
    }
  }

  return (
    <div>
      {stars}
    </div>
  );
};

export default StarRating;
