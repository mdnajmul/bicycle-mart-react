import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Divider } from "@material-ui/core";
import Product from "../Home/Product/Product";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  //Get all products
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
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
          ALL BICYCLE COLLECTION
        </Typography>
        <Divider />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {allProducts.map((product) => (
            <Product key={product?._id} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllProducts;
