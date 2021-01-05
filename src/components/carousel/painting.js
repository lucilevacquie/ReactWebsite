import React from "react";
import Carousel from "./carousel";
import slide1 from "../../assets/alien.jpg";
import slide2 from "../../assets/space.jpg";
import slide3 from "../../assets/moon.jpg";
import slide4 from "../../assets/deer.jpg";
import slide5 from "../../assets/flowerInTheNight.jpg";
import slide6 from "../../assets/colorful-night.png";

const slidesData = [
  {
    img: slide1,
  },
  {
    img: slide2,
  },
  {
    img: slide3,
  },
  {
    img: slide4,
  },
  {
    img: slide5,
  },
  {
    img: slide6,
  },
];

const Painting = () => {
  return <Carousel slidesData={slidesData}></Carousel>;
};

export default Painting;
