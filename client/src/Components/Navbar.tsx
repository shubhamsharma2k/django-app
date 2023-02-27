import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Autocomplete,
  Button,
  Divider,
  Link,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "../store/config";

import wishCart from "../media/wishCart.webp";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { user } = useStoreState((action) => action.auth);
  const { products } = useStoreState((state) => state.home);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function productOptions(){
   return products.map((pr)=> pr.title) 
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
                filterOptions={(x) => x}
                options={productOptions()}
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
                onClick={() => navigate("/account")}
              >
                Hello {user.name.split(" ")[0]}, view Account
              </Button>
            ) : (
              <Button
                className="col-1 login__btn "
                aria-describedby={id}
                onClick={handleClick}
              >
                Login/Signup
              </Button>
            )}

            <Button
              className=" col-1 cart__btn "
              onClick={() => navigate("/cart")}
            >
              <FontAwesomeIcon icon={faCartShopping} /> &nbsp; Cart
            </Button>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div className="d-flex flex-column text-center">
              <Button
                onClick={() => {
                  setAnchorEl(null);
                  navigate("/login");
                }}
                className="popover__loginBtn"
              >
                Login
              </Button>
              <Typography className="m-3" variant="caption">
                New Customer?{" "}
                <Link
                  className="text-decoration-none"
                  onClick={() => {
                    setAnchorEl(null);
                    navigate("/signup");
                  }}
                >
                  Signup
                </Link>
              </Typography>
            </div>
          </Popover>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
