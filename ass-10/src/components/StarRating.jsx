import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <div className="flex mt-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className="mr-1"
          color={index < rating ? "#e8f807" : "#d1d5db"} // yellow & gray
        />
      ))}
    </div>
  );
};

export default StarRating;