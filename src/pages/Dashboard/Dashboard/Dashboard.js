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
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";

const drawerWidth = 200;

const Dashboard = (props) => {
  const { admin, logOut } = useAuth();

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
          <Link style={{ textDecoration: "none" }} to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Divider />
          <Link style={{ textDecoration: "none" }} to={`${url}/manageorders`}>
            <Button color="inherit">Manage All Orders</Button>
          </Link>
          <Divider />
          <Link
            style={{ textDecoration: "none" }}
            to={`${url}/manageAllProducts`}
          >
            <Button color="inherit">Manage Products</Button>
          </Link>
          <Divider />
          <Link style={{ textDecoration: "none" }} to={`${url}/addProduct`}>
            <Button color="inherit">Add Product</Button>
          </Link>
          <Divider />
          <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Divider />
          <Link style={{ textDecoration: "none" }} to="/">
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          </Link>
        </Box>
      ) : (
        <Box>
          <Link to="/" style={{ textDecoration: "none" }} sx={{ mx: "auto" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Divider />

          <Link to={`${url}/myorders`} style={{ textDecoration: "none" }}>
            <Button color="inherit">My Orders</Button>
          </Link>
          <Divider />
          <Link to={`${url}/pay`} style={{ textDecoration: "none" }}>
            <Button color="inherit">PAY</Button>
          </Link>
          <Divider />
          <Link to={`${url}/review`} style={{ textDecoration: "none" }}>
            <Button color="inherit">Review</Button>
          </Link>
          <Divider />
          <Link style={{ textDecoration: "none" }} to="/">
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          </Link>
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
            keepMounted: true, // Better open performance on mobile.
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
          <Route exact path={path}></Route>
          <AdminRoute path={`${path}/manageAllOrders`}></AdminRoute>
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
