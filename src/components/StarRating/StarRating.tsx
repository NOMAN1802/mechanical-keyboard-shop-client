import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
      {halfStars === 1 && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
    </div>
  );
};

export default StarRating;
