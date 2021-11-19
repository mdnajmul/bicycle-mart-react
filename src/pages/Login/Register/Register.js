import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleRegisterSubmit = (e) => {
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      registerData.phone,
      history
    );
    e.preventDefault();
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
                Register
              </span>
            </Typography>
            {!isLoading && (
              <form onSubmit={handleRegisterSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  onChange={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  onChange={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onChange={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Phone"
                  name="phone"
                  onChange={handleOnBlur}
                  variant="standard"
                />

                <Button
                  sx={{ width: "75%", mt: 2, mb: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </form>
            )}
            {isLoading && (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress />
              </Box>
            )}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
            <Typography sx={{ mt: 4 }} variant="body1" gutterBottom>
              <span>
                Already a member?{" "}
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  Please Login
                </NavLink>
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Register;
