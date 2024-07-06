import React from "react";
import Navbar from "./Components_real/Navbar/Navbar";
import HeroPage from "./Pages/HeroPage";
import Footer from "./Components_real/Footer/Footer";
import Feedback from "./Components_real/Feedback/Feedback";
import Reviews from "./Components_real/UserReview/Reviews";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Containt from "./Pages/Containt";
import { MyContextProvider } from "./Context/Content";

function App() {
  return (
    <>
      <MyContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/subjects" element={<h1>Subjects</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact Us</h1>} />
            <Route path="/containt" element={<Containt />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <Feedback />
          <Reviews />
          <Footer />
        </BrowserRouter>
      </MyContextProvider>
    </>
  );
}

export default App;
