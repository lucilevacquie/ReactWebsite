import React from "react";
import Carousel from "./carousel";
import slide1 from "../../assets/cheese-project.png";
import slide2 from "../../assets/technical-coffee.png";
import slide3 from "../../assets/candee-yankles.png";
import slide4 from "../../assets/portfolio.png";
import slide5 from "../../assets/the-staging-club.png";

const slidesData = [
  {
    img: slide1,
    label: "Survey form - May 2020",
    link: "https://github.com/lucilevacquie/Survey-form-challenge",
  },
  {
    img: slide2,
    label: "Technical documentation page - May 2020",
    link: "https://github.com/lucilevacquie/Technical-documentation-page-challenge",
  },
  {
    img: slide3,
    label: "Product landing page - July 2020",
    link: "https://github.com/lucilevacquie/Product-landing-page-challenge",
  },
  {
    img: slide4,
    label: "Portfolio - May 2020",
    link: "https://github.com/lucilevacquie/Portfolio-challenge",
  },
  {
    img: slide5,
    label: "The Staging Club Website - September 2020",
    link: "https://github.com/lucilevacquie/the-staging-club",
  },
];

const Coding = () => {
  return <Carousel slidesData={slidesData}></Carousel>;
};

export default Coding;
