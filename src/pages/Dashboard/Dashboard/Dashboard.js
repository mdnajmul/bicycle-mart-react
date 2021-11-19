import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, NavLink, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import PrivateRoute from "../../Login/PrivateRoute/PrivateRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageOrders from "../ManageOrders/ManageOrders";
import Review from "../Review/Review";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import DashboardHome from "../DashboardHome/DashboardHome";
import "./Dashboard.css";

const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      color: "green",
      borderBottom: "1px solid yellow",
    },
  },
}));

const drawerWidth = 200;

const Dashboard = (props) => {
  const { logOut } = useAuth();
  const classes = useStyles();
  const [admin, setAdmin] = React.useState(false);
  const email = sessionStorage.getItem("email");

  React.useEffect(() => {
    fetch(`https://serene-citadel-54805.herokuapp.com/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        sessionStorage.setItem("admin", data.admin);
      });
  }, [email]);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {admin ? (
        <Box>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button className={classes.link} color="inherit">
              Home
            </Button>
          </NavLink>
          <Divider />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`${url}/manageAllOrders`}
            activeClassName="active"
          >
            <Button className={classes.link} color="inherit">
              Manage All Orders
            </Button>
          </NavLink>
          <Divider />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`${url}/manageAllProducts`}
            activeClassName="active"
          >
            <Button className={classes.link} color="inherit">
              Manage Products
            </Button>
          </NavLink>
          <Divider />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`${url}/addProduct`}
            activeClassName="active"
          >
            <Button className={classes.link} color="inherit">
              Add Product
            </Button>
          </NavLink>
          <Divider />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`${url}/makeAdmin`}
            activeClassName="active"
          >
            <Button className={classes.link} color="inherit">
              Make Admin
            </Button>
          </NavLink>
          <Divider />
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button className={classes.link} onClick={logOut} color="inherit">
              Logout
            </Button>
          </NavLink>
          <Divider />
        </Box>
      ) : (
        <Box>
          <NavLink
            to="/home"
            style={{ textDecoration: "none" }}
            sx={{ mx: "auto" }}
          >
            <Button className={classes.link} color="inherit">
              Home
            </Button>
          </NavLink>
          <Divider />

          <NavLink
            to={`${url}/myorders`}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <Button className={classes.link} color="inherit">
              My Orders
            </Button>
          </NavLink>
          <Divider />
          <NavLink
            to={`${url}/payment`}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <Button className={classes.link} color="inherit">
              Payment
            </Button>
          </NavLink>
          <Divider />
          <NavLink
            to={`${url}/review`}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <Button className={classes.link} color="inherit">
              Review
            </Button>
          </NavLink>
          <Divider />
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button className={classes.link} onClick={logOut} color="inherit">
              Logout
            </Button>
          </NavLink>
          <Divider />
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <PrivateRoute exact path={path}>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
          <PrivateRoute path={`${path}/myorders`}>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path={`${path}/payment`}>
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path={`${path}/review`}>
            <Review></Review>
          </PrivateRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
