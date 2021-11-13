import React from "react";
import Carousel from "react-material-ui-carousel";

const Banner = () => {
  return (
    <Carousel navButtonsAlwaysVisible={true} indicators={false}>
      <img src="./banner/banner-1.jpg" alt="" />
      <img src="./banner/banner-2.jpg" alt="" />
      <img src="./banner/banner-3.jpg" alt="" />
      <img src="./banner/banner-4.jpg" alt="" />
      <img src="./banner/banner-5.jpg" alt="" />
    </Carousel>
  );
};

export default Banner;
