import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import heroImg3 from "../../Images/Hero/Hero2.jpg";
import heroImg1 from "../../Images/Hero/Hero1.jpg";
import heroImg2 from "../../Images/Hero/Hero3.jpg";
const CarouselistItems = [
  {
    img: heroImg1,
    path: "",
  },
  {
    img: heroImg2,
    path: "",
  },
  {
    img: heroImg3,
    path: "",
  },
];

function HomeCarousel() {
  const items = CarouselistItems.map((item, index) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={item.img}
        alt=""
        className="cursor-pointer w-[90%] h-auto mt-10"
        role="presentation"
      />
    </div>
  ));
  return (
    <div>
      <AliceCarousel
        items={items}
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
      />
    </div>
  );
}

export default HomeCarousel;
