import React from "react";
import Carousel1 from "../components/carousel/painting";
import Carousel2 from "../components/carousel/traveling";
import Carousel3 from "../components/carousel/coding";
import Subtitles from "../components/subtitles/subtitles";

const Interests = () => {
  return (
    <>
      <Subtitles>Painting</Subtitles>
      <Carousel1 />
      <Subtitles>Traveling</Subtitles>
      <Carousel2 />
      <Subtitles>Web development</Subtitles>
      <Carousel3 />
    </>
  );
};

export default Interests;
