import React from "react";
import Subtitles from "../components/subtitles/subtitles";
import ImageLink from "../components/image-link/image-link";

const Contact = () => {
  return (
    <>
      <Subtitles>
        <p>
          If you have any questions, comments or even advices: it's just here!
        </p>
        <p>
          <a href="mailto:lucile.vacquie@gmail.com">lucile.vacquie@gmail.com</a>
        </p>
        <p>And for more informations</p>
      </Subtitles>
      <ImageLink></ImageLink>
    </>
  );
};

export default Contact;
