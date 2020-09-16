import React from "react";
import Carousel from "./carousel";
import slide1 from "../../assets/cheese-project.png";
import slide2 from "../../assets/technical-coffee.png";
import slide3 from "../../assets/candee-yankles.png";
import slide4 from "../../assets/portfolio.png";

const slidesData = [
  {
    img: slide1,
    label: "Survey form - May 2020",
  },
  {
    img: slide2,
    label: "Technical documentation page - May 2020",
  },
  {
    img: slide3,
    label: "Product landing page - July 2020",
  },
  {
    img: slide4,
    label: "Portfolio - May 2020",
  },
];

const Coding = () => {
  return <Carousel slidesData={slidesData}></Carousel>;
};

export default Coding;
