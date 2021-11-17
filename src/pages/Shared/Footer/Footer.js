import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Box className="footer-top">
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid sx={{ mt: 2 }} item xs={4} sm={4} md={3}>
              <Typography
                sx={{ textAlign: "start", mb: 2 }}
                variant="h4"
                component="div"
              >
                <span style={{ color: "white", fontWeight: "bold" }}>
                  Bicycle
                </span>
                <span style={{ color: "red", fontWeight: "bold" }}>Mart</span>
              </Typography>
              <Typography
                sx={{ textAlign: "justify", mt: 2, mb: 4 }}
                variant="p"
                component="div"
                style={{ color: "white" }}
              >
                BicycleMart is the first and largest website about bicycle in
                Bangladesh. We have started our journey since 25th January 2019.
                We have experienced and hard working team and our prime goal is
                to provide motorcycle related necessary information to the
                visitors in easy way.
              </Typography>
            </Grid>
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={3}>
              <Typography
                sx={{ textAlign: "start", mb: 2 }}
                variant="h5"
                component="div"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Most Popular
              </Typography>
              <ul style={{ textAlign: "start" }}>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/products">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Bicycle Collection
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Things to Do
                    </span>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Top Bicycle
                    </span>
                  </Link>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/aboutus">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Bicycle Reviews
                    </span>
                  </NavLink>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Blog
                    </span>
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={3}>
              <Typography
                sx={{ textAlign: "start", mb: 2 }}
                variant="h5"
                component="div"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Quick Link
              </Typography>
              <ul style={{ textAlign: "start" }}>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      About us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Blog
                    </span>
                  </Link>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/aboutus">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Privacy & Policy
                    </span>
                  </NavLink>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Payment
                    </span>
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={3}>
              <Typography
                sx={{ textAlign: "start", mb: 2 }}
                variant="h5"
                component="div"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Social Network
              </Typography>
              <ul style={{ textAlign: "start" }}>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Facebook
                    </span>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Twitter
                    </span>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Google+
                    </span>
                  </Link>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/aboutus">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      LinkedIn
                    </span>
                  </NavLink>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#3F51B5" }}
                    >
                      Youtube
                    </span>
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <h2>Footer</h2>
    </Box>
  );
};

export default Footer;
