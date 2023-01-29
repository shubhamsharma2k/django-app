import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "../store/config";

import wishCart from "../media/wishCart.webp";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useStoreState((action) => action.auth);

  return (
    <Box>
      <AppBar position="static" className="navbar_main" enableColorOnDark>
        <Toolbar>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-1 text-center" onClick={() => navigate("/")}>
              <img src={wishCart} className="logo__clickable" alt="no_img" />
            </div>
            {user.isAuthenticated && (
              <Typography
                className="col-2 text-center address__btn"
                variant="body2"
              >
                Deliver to, <br />
                {user.name}
              </Typography>
            )}
            <div className="col-6 ">
              <Autocomplete
                id="combo-box-demo"
                options={["a", "b"]}
                className="navbar__autocomplete"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search for products..."
                    size="small"
                  />
                )}
              />
            </div>
            {user.isAuthenticated ? (
              <Button
                className="col-2 login__btn "
                onClick={() => navigate("/login")}
              >
                Hello, {user.name.split(" ")[0]} view Account
              </Button>
            ) : (
              <Button
                className="col-1 login__btn "
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}

            <Button className=" col-1 cart__btn " onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faCartShopping} /> &nbsp; Cart
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
