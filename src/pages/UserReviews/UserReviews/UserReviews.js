import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Divider } from "@material-ui/core";
import EachReview from "../EachReview/EachReview";
import Slider from "react-slick";

const UserReviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  //Get All Reviews
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  });

  var settings = {
    dots: false,
    infinite: true,
    accessibility: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Container>
        <Divider />
        <Typography
          sx={{
            fontWeight: 500,
            m: 2,
            color: "success.main",
            textAlign: "center",
          }}
          variant="h4"
          component="div"
        >
          <span style={{ color: "blue", fontWeight: "bold" }}>HAPPY </span>
          <span style={{ color: "orange", fontWeight: "bold" }}>CLIENT </span>
          <span style={{ color: "blue", fontWeight: "bold" }}>SAYS</span>
        </Typography>
        <Divider />
        <Grid>
          <Slider {...settings}>
            {allReviews.map((review) => (
              <EachReview key={review?._id} review={review}></EachReview>
            ))}
          </Slider>
        </Grid>
      </Container>
    </Box>
  );
};

export default UserReviews;
