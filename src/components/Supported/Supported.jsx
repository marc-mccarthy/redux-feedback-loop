import React, {useState} from 'react';
import './Supported.css';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button, Stack} from '@mui/material';
import SnackBar from '../SnackBar/SnackBar';

function Supported() {

    const [open, setOpen] = useState(false);
    const [feelNum, setFeelNum] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const change = (event) => {
        setFeelNum(event.target.value);
    }

    const check = () => {
        setOpen(true);
        if (feelNum >= 0 && feelNum <= 5 && feelNum !== '') {
            submit();
            setFeelNum('');
        } else {
            Swal.fire({
                title: 'Invalid Input',
                icon: 'error',
                text: 'Must be 0 through 5.',
                confirmButtonText: 'Ok'
            }).then(result => {
                if (result.isConfirmed) {
                    return false;
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }

    const submit = () => {
        dispatch({type: 'SAVE_SUPPORTED', payload: feelNum});
        history.push('/comments');
    }

    return (
        <div className='Supported'>
            <header className='Supported-header'>
                <h1 className='Supported-title'>Supported</h1>
            </header>
            <h2>How well are you being supported?</h2>
            <Stack spacing={2} direction="row" justifyContent="center">
                <input onChange={change} value={feelNum} type="number" placeholder="i.e. #1-5"/>
                <Button variant="contained" color="secondary" onClick={check}>Next</Button>
            </Stack>
            <SnackBar open={open} setOpen={setOpen}/>
        </div>
    );
}

export default Supported;
