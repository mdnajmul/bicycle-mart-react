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

const MyOrders = () => {
  const email = sessionStorage.getItem("email");
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);
  let i = 1;

  useEffect(() => {
    fetch(`https://serene-citadel-54805.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
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

  return (
    <Box>
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "green" }}
        gutterBottom
      >
        ALL MY ORDERS
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Product Name</TableCell>
              <TableCell align="center">Product Price</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i++}
                  {console.log(order.orderDetails[0]?.name)}
                </TableCell>
                <TableCell align="center">
                  {order?.orderDetails[0]?.name}
                </TableCell>
                <TableCell align="center">
                  BDT {order?.orderDetails[0]?.price}
                </TableCell>
                <TableCell align="center">{order?.status}</TableCell>
                <TableCell align="center">
                  {order?.status === "shipped" ? (
                    <Button variant="contained" disabled>
                      Cancel
                    </Button>
                  ) : (
                    <button
                      onClick={() => handleDelete(order?._id)}
                      className="delete-btn"
                    >
                      Cancel
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyOrders;
