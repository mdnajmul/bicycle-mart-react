import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

const EachReview = (props) => {
  const { name, review, rating } = props.review;
  return (
    <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
      <CardContent sx={{ px: 2 }}>
        <Typography sx={{ textAlign: "center" }} variant="h6" component="div">
          {name}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2 }} variant="body2">
          {review}
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="body2">
          {name}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2 }} variant="body2">
          <Rating name="read-only" value={rating} readOnly />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EachReview;
