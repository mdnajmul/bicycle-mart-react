import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Product.css";
import { Rating } from "@mui/material";
import { NavLink } from "react-router-dom";

const Product = (props) => {
  const { _id, name, brand, img, price, rating } = props.product;
  const { model } = props.product.specification;
  return (
    <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
        <CardMedia
          component="img"
          style={{ width: "100%", margin: "0 auto", padding: "8px" }}
          image={img}
          alt="green iguana"
        />
        <CardContent sx={{ px: 2 }}>
          <Typography sx={{ textAlign: "center" }} variant="h6" component="div">
            {name}
          </Typography>
          <Typography sx={{ textAlign: "center", my: 2 }} variant="body2">
            <span style={{ color: "blue", fontWeight: "bold" }}>BRAND:</span>{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>{brand}</span>
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="body2">
            <span style={{ color: "blue", fontWeight: "bold" }}>MODEL:</span>{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>{model}</span>
          </Typography>
          <Typography sx={{ textAlign: "center", my: 2 }} variant="body2">
            <span style={{ color: "blue", fontWeight: "bold" }}>PRICE:</span>{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              BDT {price}
            </span>
          </Typography>
          <Typography sx={{ textAlign: "center", my: 2 }} variant="body2">
            <Rating name="read-only" value={rating} readOnly />
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="body2">
            <NavLink
              style={{
                textDecoration: "none",
              }}
              className="update-btn"
              to={`/bookProduct/${_id}`}
            >
              PAY NOW
            </NavLink>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
