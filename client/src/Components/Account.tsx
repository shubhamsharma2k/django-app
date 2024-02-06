import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import BoxImg from "../media/Box.png";
import signInLock from "../media/signInLock.png";
import address from "../media/address.png";

const Account = () => {
  console.log('test')
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
                  <img src={BoxImg} style={{ height: "70px" }} />
                </div>
                <div className="col-8">
                  <Typography variant="subtitle2">Your Orders</Typography>
                  <Typography variant="body2">
                    Track, return, or buy things again
                  </Typography>
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
            <Paper variant="outlined" sx={{ padding: "10px" }}>
              <div className="row">
                <div className="col-4">
                  <img src={signInLock} style={{ height: "70px" }} />
                </div>
                <div className="col-8">
                  <Typography variant="subtitle2">Login & security</Typography>
                  <Typography variant="body2">
                    Edit login, name and mobile number
                  </Typography>
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
            <Paper variant="outlined" sx={{ padding: "10px" }}>
              <div className="row">
                <div className="col-4">
                  <img src={address} style={{ height: "70px" }} />
                </div>
                <div className="col-8">
                  <Typography variant="subtitle2">Your Addresses</Typography>
                  <Typography variant="body2">
                    Edit addresses for orders and gifts
                  </Typography>
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
