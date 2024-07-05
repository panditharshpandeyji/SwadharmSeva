// src/Feedback.js

import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}`);
    setFeedback(""); // Clear the textarea
  };

  return (
    <div className="w-[96%] m-auto bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 text-white flex flex-col justify-center items-center py-8">
      <h2 className="text-xl font-bold mb-7">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="w-[100%]">
        <div className="mb-2 flex flex-col justify-center items-center ">
          <input
            type="text"
            placeholder="Enter tittle here"
            className=" px-3 py-1 text-orange-600 rounded-lg w-[80%] lg:w-[40%]  border mb-7"
            required
          />
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="border-black  w-[80%] lg:w-[40%] px-5 py-2 mb-7 text-orange-600"
            rows={4}
            placeholder="Enter description here"
            required
          ></textarea>
          <button
            type="submit"
            className="w-[20%] py-3 bg-white text-orange-600 font-semibold rounded hover:bg-orange-300 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
