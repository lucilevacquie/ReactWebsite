import React from "react";
import "./carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <div>
      <div className="next-slick-arrow">⫸</div>
    </div>
  ),
  prevArrow: (
    <div>
      <div className="prev-slick-arrow">⫷</div>
    </div>
  ),
};

const Carousel = (props) => {
  return (
    <div className="carousel">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {props.slidesData.map((slide, index) => (
            <div className="slick-slide" key={index}>
              <img className="slick-slide-image" src={slide.img} alt="" />
              {slide.label && <div className="slide-label">{slide.label}</div>}
              {slide.link && <a href={slide.link} className="slide-link" target="_blank">Link to my GitHub</a>}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
