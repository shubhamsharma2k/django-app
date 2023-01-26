import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Autocomplete, Button, TextField } from "@mui/material";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "../store/config";

import wishCart from "../media/wishCart.webp";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static" className="navbar_main" enableColorOnDark>
        <Toolbar>
          <div className="row" style={{ width: "60%" }}>
            <div className="col-3 text-center" onClick={() => navigate("/")}>
              <img
                src={wishCart}
                className="p-0 m-0 logo__clickable"
                alt="no_img"
              />
            </div>
            <div className="col-7">
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
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button className=" col-1 cart__btn" onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faCartShopping} /> &nbsp; Cart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
