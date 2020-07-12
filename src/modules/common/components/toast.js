import React, { useState, useEffect, useRef } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Toast(props) {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   formValidate();
  // }, [open]);

  const handleClose = (event, reason) => {
    if(reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        This is a success message!
      </Alert>
    </Snackbar>
  )
}