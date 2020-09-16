import React from "react";
import Carousel from "./carousel";
import slide1 from "../../assets/laccomo.jpg";
import slide2 from "../../assets/glasgow.jpg";
import slide3 from "../../assets/fez.jpg";
import slide4 from "../../assets/chefchaouen.jpg";
import slide5 from "../../assets/berlinmur.jpg";
import slide6 from "../../assets/amsterdam.jpg";
import slide7 from "../../assets/galway.jpg";
import slide8 from "../../assets/mohercliff.jpg";
import slide9 from "../../assets/melbourne.jpg";
import slide10 from "../../assets/apostle.jpg";

const slidesData = [
  {
    img: slide1,
    label: "Lac Como, Italy - March 2018",
  },
  {
    img: slide2,
    label: "Glasgow, Scotland - August 2018",
  },
  {
    img: slide3,
    label: "Fés, Morocco - November 2018",
  },
  {
    img: slide4,
    label: "Chefchaouen, Morocco - November 2018",
  },
  {
    img: slide5,
    label: "Berlin's Wall - June 2019",
  },
  {
    img: slide6,
    label: "Amsterdam, Netherlands - July 2019",
  },
  {
    img: slide7,
    label: "Galway, Ireland - July 2019",
  },
  {
    img: slide8,
    label: "Cliff of Moher, Ireland - June 2019",
  },
  {
    img: slide9,
    label: "Melbourne, Australia - October 2019",
  },
  {
    img: slide10,
    label: "The 12 Apostles, Australia - November 2019",
  },
];

const Traveling = () => {
  return <Carousel slidesData={slidesData}></Carousel>;
};

export default Traveling;
