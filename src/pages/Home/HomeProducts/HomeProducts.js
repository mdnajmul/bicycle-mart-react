import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Product from "../Product/Product";
import { Divider } from "@material-ui/core";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  //Get all products
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const homeProducts = products.slice(0, 6);

  return (
    <Box sx={{ flexGrow: 1 }}>
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
          OUR BICYCLE COLLECTION
        </Typography>
        <Divider />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {homeProducts.map((product) => (
            <Product key={product?._id} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeProducts;
