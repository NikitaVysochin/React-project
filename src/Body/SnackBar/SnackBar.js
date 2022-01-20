import React, { State, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar({ handleClose, open, setOpen }) {
  const {bool, sev, message} = open;

  return (
    <div>
     <Snackbar open={bool}
      autoHideDuration={6000}
      onClose={handleClose}>
     <Alert severity={sev}>{message}</Alert>
      </Snackbar>
    </div>
  );
}