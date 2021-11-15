import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useLocation, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Shipping = () => {
  let { bookId } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const email = sessionStorage.getItem("email");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${bookId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const { _id, name, img, brand, price, rating } = product;
  const {
    model,
    color,
    variant,
    frameVariant,
    type,
    tyreVariant,
    frameMaterial,
  } = product.specification;

  const onSubmit = (data) => {
    data.orderDetails = product;
    data.status = "pending";
    fetch("http://localhost:5000/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Placced Successfully!");
          reset();
        }
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
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
          PAYMENT GATEWAY
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid sx={{ mt: 4 }} item xs={4} sm={8} md={6}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardMedia
                component="img"
                style={{ width: "100%", margin: "0 auto", padding: "8px" }}
                image={img}
                alt="green iguana"
              />
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  {name}
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    BRAND:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {brand}
                  </span>
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    MODEL:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {model}
                  </span>
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    COLOR:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {color}
                  </span>
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Category:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {type}
                  </span>
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Variant:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {variant}
                  </span>
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Frame Variant:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {frameVariant}
                  </span>
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Tyre Variant:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {tyreVariant}
                  </span>
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Frame Material:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {frameMaterial}
                  </span>
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    PRICE:
                  </span>{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    BDT {price}
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={4} sm={8} md={6}>
            <div className="product-form">
              <div>
                <h2
                  style={{
                    textAlign: "center",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Shipping Adress
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="Your name"
                    readOnly
                    defaultValue={user?.displayName}
                    {...register("name")}
                  />
                  <input
                    placeholder="Your email"
                    readOnly
                    defaultValue={email}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="error">This field is required</span>
                  )}
                  <input
                    placeholder="Your phone number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="error">This field is required</span>
                  )}
                  <input
                    placeholder="Your city"
                    defaultValue=""
                    {...register("city")}
                  />
                  <input
                    placeholder="Your address"
                    defaultValue=""
                    {...register("address")}
                  />
                  <input className="header-top-btn" type="submit" />
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Shipping;
