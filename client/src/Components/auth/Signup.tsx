import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import wishCart from "../../media/wishCart.webp";
import InfoIcon from "@mui/icons-material/Info";
import { useStoreActions, useStoreState } from "../../store/config";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

const Signup = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { register } = useStoreActions((action) => action.auth);

  async function handleSignup() {
    if (
      !formValue.email.match(new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
    ) {
    } else {
      const payload = {
        name: formValue.name,
        email: formValue.email,
        password: formValue.password,
      };
      const rsp = await register(payload);
      if (rsp.status === 201) {
        navigate("/login");
      }
    }
  }

  return (
    <div className="text-center login__container pt-4">
      <div className="mb-4">
        <img src={wishCart} className="logo__nonClickable" alt="no_img" />{" "}
      </div>
      <div className="login__form">
        <div>
          <Typography variant="h5" className="mb-3">
            Create Account
          </Typography>
        </div>
        <div className="mb-2">
          <Typography variant="subtitle2">Name</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            style={{ width: "100%" }}
            size="small"
            onChange={(e) =>
              setFormValue({ ...formValue, name: e.target.value })
            }
          />
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
        <div className="mb-3">
          <Typography variant="subtitle2">Password</Typography>
          <TextField
            type="password"
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
          onClick={handleSignup}
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
      <Divider style={{ width: "50%" }} className="mx-auto mb-2" />
    </div>
  );
};

export default Signup;
