import React from "react";
import UserReview from "./UserReview";

function Reviews() {
  const reviews = [
    {
      name: "John Doe",
      date: "July 5, 2024",
      review: "This is a fantastic product! I highly recommend it to everyone.",
      rating: 4,
    },
    {
      name: "Jane Smith",
      date: "July 3, 2024",
      review: "Good quality and reasonable price. Satisfied with my purchase.",
      rating: 5,
    },
    // Add more reviews here
  ];
  return (
    <div className="flex flex-col justify-center items-center w-[100%] py-10">
      <h1 className="text-orange-500 text-xl font-bold underline mb-7">
        User Reviews
      </h1>
      {reviews.map((review, index) => (
        <UserReview key={index} {...review} />
      ))}
    </div>
  );
}

export default Reviews;
