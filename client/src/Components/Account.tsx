import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import BoxImg from "../media/Box.png";

const Account = () => {
  return (
    <div className="container">
      <Typography variant="h5" className="mt-4">
        Your Account
      </Typography>
      <div className="account__tiles">
        <div className="account__tile">
          <Box
            sx={{
              "& > :hover": {
                background: "#eee",
              },
            }}
          >
            <Paper variant="outlined" sx={{ padding: "10px" }}>
              <div className="row">
                <div className="col-4">
                  <img src={BoxImg} />
                </div>
                <div className="col-8">
                  <Typography variant="h6">Your Orders</Typography>
                  <Typography>Track, return, or buy things again</Typography>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
        <div className="account__tile">
          <Box
            sx={{
              "& > :hover": {
                background: "#eee",
              },
            }}
          >
            <Paper  variant="outlined" sx={{ padding: "10px" }}>
              <div className="row">
                <div className="col-4">
                  <img src={BoxImg} />
                </div>
                <div className="col-8">
                  <Typography variant="h6">Login & security</Typography>
                  <Typography>Edit login, and mobile number</Typography>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
        <div className="account__tile">
          <Box
            sx={{
              "& > :hover": {
                background: "#eee",
              },
            }}
          >
            <Paper  variant="outlined" sx={{ padding: "10px" }}>
              <div className="row">
                <div className="col-4">
                  <img src={BoxImg} />
                </div>
                <div className="col-8">
                  <Typography variant="h6">Your Addresses</Typography>
                  <Typography>Edit addresses for orders and gifts</Typography>
                </div>
              </div>
            </Paper>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Account;
