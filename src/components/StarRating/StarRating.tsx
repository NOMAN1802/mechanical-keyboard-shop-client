import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Ensure rating is a valid number between 0 and 5
  const validRating = Number.isFinite(rating) ? Math.max(0, Math.min(rating, 5)) : 0;

  const fullStars = Math.floor(validRating);
  const halfStars = validRating % 1 !== 0 ? 1 : 0;
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
