import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';

const TestimonialCard = ({ name, image, rating, title, content }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center mb-8 shadow-[0_10px_15px_-3px_rgba(165,180,252,0.5),_0_4px_6px_-4px_rgba(165,180,252,0.5)] p-4 rounded-lg mt-2">
      {/* Profile Image */}
      <img src={image} alt={name} className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover" />

      {/* Testimonial Content */}
      <div className="flex flex-col sm:ml-4">
        <h4 className="font-semibold text-gray-900 text-xl text-center sm:text-left">{name}</h4>

        {/* Star Rating */}
        <div className="flex text-[#0f172a] my-1 justify-center sm:justify-start">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={i < rating ? faStar : regStar}
              className="text-xl mr-1"
            />
          ))}
        </div>

        {/* Title */}
        <h5 className="font-medium text-lg text-gray-800 mb-1 text-center sm:text-left">{title}</h5>

        {/* Body */}
        <p className="text-gray-600 text-md text-center sm:text-left">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

