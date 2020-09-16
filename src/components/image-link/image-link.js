import React from "react";
import "./image-link.scss";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedIn.png";
import Github from "../../assets/github.png";

const images = [
  {
    img: Instagram,
    link: "https://www.instagram.com/lucile_vcq/",
  },
  {
    img: Linkedin,
    link: "https://www.linkedin.com/in/lucile-vacqui%C3%A929/",
  },
  {
    img: Github,
    link: "https://github.com/lucilevacquie",
  },
];

const ImageLink = () => {
  return (
    <>
      <div className="image-container">
        {images.map((item) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img className="image" src={item.img} alt="" />
          </a>
        ))}
      </div>
    </>
  );
};

export default ImageLink;
