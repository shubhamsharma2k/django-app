import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useStoreActions, useStoreState } from "../../store/config";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login = () => {
  const { loginModal } = useStoreState((state) => state.auth);
  const { setLoginModal } = useStoreActions((action) => action.auth);

  const handleClose = () => setLoginModal(false);

  return (
    <div>
      <Modal
        open={loginModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
