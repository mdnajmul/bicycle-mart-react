import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bicycle<span style={{ color: "red" }}>Mart</span>
          </Typography>
          <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/products"
          >
            <Button color="inherit">Products</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/dashboard"
          >
            <Button color="inherit">Dashboard</Button>
          </NavLink>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
