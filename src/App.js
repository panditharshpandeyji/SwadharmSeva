import React from "react";
import Navbar from "./Components_real/Navbar/Navbar";
import HeroPage from "./Pages/HeroPage";
import Footer from "./Components_real/Footer/Footer";
import UserReview from "./Components_real/UserReview/UserReview";
import Feedback from "./Components_real/Feedback/Feedback";
import Review from "./Components_real/UserReview/UserReview";
import Reviews from "./Components_real/UserReview/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Feedback />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
