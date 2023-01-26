import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import logo from "../../media/logo.avif";
import InfoIcon from "@mui/icons-material/Info";
import { useStoreActions, useStoreState } from "../../store/config";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

const Signup = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleLogin() {}

  return (
    <div className="text-center login__container pt-4">
      <div className="mb-4">
        <img src={logo} className="logo__nonClickable" alt="no_img" />
        <Typography variant="caption"> WishCart.in</Typography>
      </div>
      <div className="login__form">
        <div>
          <Typography variant="h5" className="mb-3">
            Create Account
          </Typography>
        </div>
        <div className="mb-2">
          <Typography variant="subtitle2">Your name</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            style={{ width: "100%" }}
            size="small"
            placeholder="First and last name"
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <Typography variant="subtitle2">Password</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            className="login__textFields mb-1"
            placeholder="At least 6 characters"
            onChange={(e) =>
              setFormValue({ ...formValue, password: e.target.value })
            }
          />

          <Typography fontSize="small">
            <InfoIcon color="info" fontSize="small" />
            Passwords must be at least 6 characters.
          </Typography>
        </div>
        <Button
          variant="contained"
          className="btn__primary w-100"
          size="small"
          onClick={handleLogin}
        >
          Continue
        </Button>
      </div>
      <Typography variant="subtitle2" className="mb-2">
        Already have an account?{" "}
        <Link
          className="text-decoration-none"
          onClick={() => navigate("/login")}
        >
          Login
        </Link>
      </Typography>
      <hr className="mx-auto" style={{ width: "80%" }} />
    </div>
  );
};

export default Signup;
