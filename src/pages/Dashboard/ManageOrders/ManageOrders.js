import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [reload, setReload] = useState(false);
  let i = 1;

  useEffect(() => {
    fetch("https://serene-citadel-54805.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [reload]);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure, you want to delete?");
    if (procced) {
      fetch(`https://serene-citadel-54805.herokuapp.com/delteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Order Deleted Successfully!");
            setReload(!reload);
          }
        });
    }
  };

  // const status = "shipped";
  const handleUpdate = (id) => {
    fetch(`https://serene-citadel-54805.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Status updated successfully!");
          setReload(!reload);
        }
      });
  };

  return (
    <Box>
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "green" }}
        gutterBottom
      >
        ALL ORDERS
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">User Name</TableCell>
              <TableCell align="center">User Email</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.map((order) => (
              <TableRow
                key={order?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i++}
                </TableCell>
                <TableCell align="center">{order?.name}</TableCell>
                <TableCell align="center">{order?.email}</TableCell>
                <TableCell align="center">{order?.status}</TableCell>
                <TableCell align="center">
                  {order?.status === "shipped" ? (
                    <Button variant="contained" disabled>
                      Update Status
                    </Button>
                  ) : (
                    <button
                      onClick={() => handleUpdate(order?._id)}
                      className="update-btn"
                      style={{ marginRight: "10px" }}
                    >
                      Update Status
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(order?._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageOrders;
