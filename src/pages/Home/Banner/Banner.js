import React from "react";
import Carousel from "react-material-ui-carousel";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";
import banner4 from "../../../images/banner/banner-4.jpg";
import banner5 from "../../../images/banner/banner-5.jpg";

const Banner = () => {
  return (
    <Carousel indicators={false}>
      <img style={{ width: "100%", height: "300px" }} src={banner1} alt="" />
      <img style={{ width: "100%", height: "300px" }} src={banner2} alt="" />
      <img style={{ width: "100%", height: "300px" }} src={banner3} alt="" />
      <img style={{ width: "100%", height: "300px" }} src={banner4} alt="" />
      <img style={{ width: "100%", height: "300px" }} src={banner5} alt="" />
    </Carousel>
  );
};

export default Banner;
