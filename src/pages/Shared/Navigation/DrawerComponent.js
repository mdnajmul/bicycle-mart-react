import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import useAuth from "../../../hooks/useAuth";
import { Button, Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "15px",
    "&:hover": {
      color: "yellow",
    },
  },
  icon: {
    color: "white",
  },
}));

const DrawerComponent = () => {
  const { logOut } = useAuth();
  const email = sessionStorage.getItem("email");
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                HOME
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/products" className={classes.link}>
                ALL COLLECTION
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          {email ? (
            <Box>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/dashboard" className={classes.link}>
                    DASHBOARD
                  </Link>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Button onClick={logOut} className={classes.link}>
                    LOGOUT
                  </Button>
                </ListItemText>
              </ListItem>
            </Box>
          ) : (
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/login" className={classes.link}>
                  LOGIN
                </Link>
              </ListItemText>
            </ListItem>
          )}

          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
