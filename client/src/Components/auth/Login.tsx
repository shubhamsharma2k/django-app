import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import wishCart from "../../media/wishCart.webp";

import { useStoreActions, useStoreState } from "../../store/config";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link/Link";

const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleLogin() {}

  return (
    <div className="text-center login__container pt-4">
      <div className="mb-4">
        <img src={wishCart} className="logo__nonClickable" alt="no_img" />
      </div>
      <div className="login__form">
        <div>
          <Typography variant="h5" className="mb-3">
            Login
          </Typography>
        </div>
        <div className="mb-2">
          <Typography variant="subtitle2">Email</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            style={{ width: "100%" }}
            size="small"
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
          />
        </div>
        <div className="mb-1">
          <Typography variant="subtitle2">Password</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            className="login__textFields"
            onChange={(e) =>
              setFormValue({ ...formValue, password: e.target.value })
            }
          />
        </div>
        <Typography variant="subtitle2" className="mb-2">
          <Link
            className="text-decoration-none"
            onClick={() => navigate("/login")}
          >
            Forgot Password
          </Link>
        </Typography>

        <Button
          variant="contained"
          className="btn__primary w-100"
          size="small"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
      <Divider style={{ width: "50%" }} className="mx-auto mb-2">
        <Typography variant="subtitle2">New to WishCart?</Typography>
      </Divider>
      <Button
        className="btn__secondary"
        size="small"
        onClick={() => navigate("/signup")}
      >
        Create your WishCart account
      </Button>
    </div>
  );
};

export default Login;
