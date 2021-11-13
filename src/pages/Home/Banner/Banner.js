import React from "react";
import Carousel from "react-material-ui-carousel";

const Banner = () => {
  return (
    <Carousel indicators={false}>
      <div>
        <img style={{ width: "100%" }} src="./banner/banner-1.jpg" alt="" />
      </div>
      <div>
        <img style={{ width: "100%" }} src="./banner/banner-2.jpg" alt="" />
      </div>
      <div>
        <img style={{ width: "100%" }} src="./banner/banner-3.jpg" alt="" />
      </div>
      <div>
        <img style={{ width: "100%" }} src="./banner/banner-4.jpg" alt="" />
      </div>
      <div>
        <img style={{ width: "100%" }} src="./banner/banner-5.jpg" alt="" />
      </div>
    </Carousel>
  );
};

export default Banner;
