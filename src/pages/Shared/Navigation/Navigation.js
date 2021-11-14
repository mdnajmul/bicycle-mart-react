import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button,
  Box,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import useAuth from "../../../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid yellow",
    },
  },
}));

// marginLeft: theme.spacing(20),
const Navigation = () => {
  const { user, logOut } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.logo}
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Bicycle<span style={{ color: "red" }}>Mart</span>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <Button className={classes.link}>Home</Button>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/products">
              <Button className={classes.link}>ALL COLLECTION</Button>
            </NavLink>

            {user?.email ? (
              <Box>
                <NavLink style={{ textDecoration: "none" }} to="/dashboard">
                  <Button className={classes.link}>Dashboard</Button>
                </NavLink>
                <Button onClick={logOut} className={classes.link}>
                  Logout
                </Button>
              </Box>
            ) : (
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button className={classes.link}>Login</Button>
              </NavLink>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
