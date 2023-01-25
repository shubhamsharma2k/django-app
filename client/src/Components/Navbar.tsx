import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Autocomplete, Button, TextField } from "@mui/material";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "../store/config";

import asd from "../media/asd.avif";
import Login from "./auth/Login";

const Navbar = () => {
  const { loginModal } = useStoreState((state) => state.auth);
  const { setLoginModal } = useStoreActions((action) => action.auth);

  return (
    <Box>
      <AppBar position="static" className="navbar_main" enableColorOnDark>
        <Toolbar>
          <div className="row" style={{ width: "60%" }}>
            <div className="col-2 text-end">
              <img src={asd} className="p-0 m-0 logo" alt="no_img" />
            </div>
            <div className="col-8">
              <Autocomplete
                id="combo-box-demo"
                options={["a", "b"]}
                className="navbar__autocomplete"
                renderInput={(params) => (
                  <TextField {...params} placeholder="Search for products..." />
                )}
              />
            </div>
          </div>
          <Button
            className=" col-1 login__btn"
            onClick={() => setLoginModal(true)}
          >
            Login
          </Button>
          <Button
            className=" col-1 cart__btn"
            onClick={() => console.log("asd")}
          >
            <FontAwesomeIcon icon={faCartShopping} /> &nbsp; Cart
          </Button>
        </Toolbar>
      </AppBar>
      <Login />
    </Box>
  );
};

export default Navbar;
