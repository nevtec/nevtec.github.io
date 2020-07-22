import React from "react";
import Slider from "react-slick";

const SliderShow = ({ children, dots, slidesToShow }) => {
  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  }

  return <Slider {...settings}>{children}</Slider>
}

export default SliderShow;