// src/Review.js
import React from "react";

const UserReview = ({ avatar, name, date, review, rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`w-5 h-5 ${
        index < rating ? "text-yellow-400" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.122-6.54L.488 7.59l6.573-.957L10 1l2.939 5.634 6.573.957-4.756 4.961 1.122 6.54z" />
    </svg>
  ));

  return (
    <div className="mb-2 border-1 bg-orange-500 shadow-md text-white w-[60%] rounded-lg  p-4 md:flex justify-center items-center">
      <div className="mt-4 md:ml-6 md:mt-0">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold">{name}</h2>
          <span className="ml-2 text-sm text-white">{date}</span>
        </div>
        <div className="flex items-center mt-2">{stars}</div>
        <p className="mt-2 text-white text-xs">{review}</p>
      </div>
    </div>
  );
};

export default UserReview;
