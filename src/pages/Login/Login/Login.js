import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Grid,
} from "@mui/material";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {
    user,
    loginUser,
    signInUsingGoogle,
    isLoading,
    authError,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    setIsLoading(true);
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signInUsingGoogle(location, history);
  };

  return (
    <Box>
      <Box sx={{ justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid
            item
            className="login"
            sx={{
              mt: 8,
              mb: 8,
              mx: "auto",
              textAlign: "center",
              alignItems: "center",
            }}
            xs={12}
            md={6}
          >
            <Typography sx={{ mt: 4 }} variant="body1" gutterBottom>
              <span
                style={{ color: "green", fontWeight: "bold", fontSize: "24px" }}
              >
                Login
              </span>
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />

              <Button
                sx={{ width: "75%", mt: 2, mb: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </form>
            <p>Or login with</p>
            <Button onClick={handleGoogleSignIn} variant="contained">
              Google Sign In
            </Button>
            {isLoading && (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress />
              </Box>
            )}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
            <Typography sx={{ mt: 4 }} variant="body1" gutterBottom>
              <span>
                Not a member?{" "}
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  Registration up now
                </NavLink>
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
