import React from "react";
import Carousel from "./carousel";
import slide1 from "../../assets/important-to-me.png";
import slide2 from "../../assets/things-i-enjoy.png";

const slidesData = [
  {
    id: 1,
    title: "What is important to me?",
    img: slide1,
  },
  {
    id: 2,
    title: "Things I enjoy doing out of work",
    img: slide2,
  },
];

const Aboutme = () => {
  return <Carousel slidesData={slidesData}></Carousel>;
};

export default Aboutme;
