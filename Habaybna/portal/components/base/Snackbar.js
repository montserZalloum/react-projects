import {forwardRef, useEffect, useState} from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function SnackbarAlert(props) {

    const alert = props.alert

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        props.setAlert(null)
    };

    const alertStatus = alert?.isSuccess ? "success" : "error";
  return (
    <Snackbar open={!!alert?.message} onClose={handleClose} autoHideDuration={4000}>
        <Alert onClose={handleClose} severity={alertStatus} sx={{ width: '100%' }}>
          {alert?.message}
        </Alert>
    </Snackbar>
  )
}

export default SnackbarAlert