import React, {useState} from 'react';
import './Feelings.css';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button, Stack} from '@mui/material';
import SnackBar from '../SnackBar/SnackBar';

function Feelings() {

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
        dispatch({type: 'SAVE_FEELINGS', payload: feelNum});
        history.push('/understanding');
    }

    return (
        <div className='Feelings'>
            <header className='Feelings-header'>
                <h1 className='Feelings-title'>Feelings</h1>
            </header>
            <div>
                <h2>How are you feeling today?</h2>
                <Stack spacing={2} direction="row" justifyContent="center">
                    <input onChange={change} value={feelNum} type="number" placeholder="i.e. #1-5"/>
                    <Button variant="contained" color="secondary" onClick={check}>Next</Button>
                </Stack>
                <SnackBar open={open} setOpen={setOpen}/>
            </div>
        </div>
    );
}

export default Feelings;
