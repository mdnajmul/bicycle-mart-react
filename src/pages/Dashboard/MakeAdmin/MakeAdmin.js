import { Alert, Button, Box, TextField, Typography, Grid } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const useremail = sessionStorage.getItem("email");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    console.log(user);
    fetch(
      `https://serene-citadel-54805.herokuapp.com/users/makeAdmin?useremail=${useremail}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <Box>
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "green" }}
        gutterBottom
      >
        Make Admin
      </Typography>
      <Grid container justifyContent="center">
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "100%" }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <br />
          <Button sx={{ mt: 4 }} type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
      </Grid>
      {success && (
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mt: 4 }}
          gutterBottom
        >
          <Alert severity="success">Made Admin successfully!</Alert>
        </Typography>
      )}
    </Box>
  );
};

export default MakeAdmin;
