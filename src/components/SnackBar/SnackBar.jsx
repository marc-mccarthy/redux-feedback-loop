import React from 'react';
import './SnackBar.css';
import {Snackbar} from '@mui/material';

function SnackBar(props) {

    const handleClose = () => {
        props.setOpen(false);
    }

    return (
        <div>
            <Snackbar open={props.open} autoHideDuration={6000} message="Popup Alert!" onClose={handleClose}/>
        </div>
    );
}

export default SnackBar;
