import React, { useState, useEffect, useRef } from 'react';
import { Alert, Snackbar } from '@material-ui/core';

export default function Toast(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    formValidate();
  }, [open]);

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