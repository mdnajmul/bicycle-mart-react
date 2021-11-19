import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowRight,
  faAtlas,
  faCheckCircle,
  faMoneyCheckAlt,
  faPlusSquare,
  faSearchPlus,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const WorkFlow = () => {
  return (
    <Box sx={{ flexGrow: 1, my: 4 }}>
      <Container>
        <Divider />
        <Typography
          sx={{
            fontWeight: 500,
            m: 2,
            mt: 4,
            color: "success.main",
            textAlign: "center",
          }}
          variant="h4"
          component="div"
        >
          <span style={{ color: "black", fontWeight: "bold" }}>
            How <span style={{ color: "red" }}>BicycleMart</span> Works
          </span>
        </Typography>
        <Divider />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          <Grid sx={{ mt: 4, mb: 6 }} item xs={2} sm={4} md={2}>
            <Card sx={{ border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Create An Account
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={2} sm={4} md={2}>
            <Card sx={{ border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faSearchPlus}></FontAwesomeIcon>
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Search Your Product
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={2} sm={4} md={2}>
            <Card sx={{ border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faAtlas}></FontAwesomeIcon>
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Receive Best Matches
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={2} sm={4} md={2}>
            <Card sx={{ border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Give Shipping Details
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={2} sm={4} md={2}>
            <Card sx={{ border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Make Payment Online
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ mt: 4 }} item xs={2} sm={4} md={2}>
            <Card sx={{ border: 0, boxShadow: 2 }}>
              <CardContent sx={{ px: 2 }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    Bicycle Delivery
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  <span
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
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

export default WorkFlow;
