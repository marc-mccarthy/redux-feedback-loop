import React, {useState} from 'react';
import './Understanding.css';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button, Stack} from '@mui/material';
import SnackBar from '../SnackBar/SnackBar';

function Understanding() {

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
        dispatch({type: 'SAVE_UNDERSTANDING', payload: feelNum});
        history.push('/supported');
    }

    return (
        <div className='Understanding'>
            <header className='Understanding-header'>
                <h1 className='Understanding-title'>Understanding</h1>
            </header>
            <h2>How well are you understanding the content?</h2>
            <Stack spacing={2} direction="row" justifyContent="center">
                <input onChange={change} value={feelNum} type="number" placeholder="i.e. #1-5"/>
                <Button variant="contained" color="secondary" onClick={check}>Next</Button>
            </Stack>
            <SnackBar open={open} setOpen={setOpen}/>
        </div>
    );
}

export default Understanding;
