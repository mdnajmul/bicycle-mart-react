import React from "react";
import { Typography } from "@mui/material";

const DashboardHome = () => {
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

  return (
    <Typography
      variant="h4"
      style={{ textAlign: "center", color: "blue" }}
      gutterBottom
    >
      {admin ? "BicycleMart Admin Dashboard" : "BicycleMart User Dashboard"}
    </Typography>
  );
};

export default DashboardHome;
