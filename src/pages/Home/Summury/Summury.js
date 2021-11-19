import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Summury.css";

const Summury = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 8, mb: -8 }} className="bg-clr">
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid sx={{ mt: 4, mb: 6 }} item xs={4} sm={4} md={3}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Total Brands
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    20+
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={3}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Total Sold
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    6132+
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={3}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Free Service
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    1 Year
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={4} sm={4} md={3}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Happy Customer
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "orange", fontWeight: "bold" }}>
                    12321+
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Summury;
