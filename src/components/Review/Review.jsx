import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './Review.css';
import Swal from 'sweetalert2';
import {useSelector} from 'react-redux';
import {Button} from '@mui/material';
import SnackBar from '../SnackBar/SnackBar';

function Review() {

    const [open, setOpen] = useState(false);

    const history = useHistory();
    const feelings = useSelector(store => store.feelingsReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const supported = useSelector(store => store.supportedReducer);
    const comments = useSelector(store => store.commentsReducer);

    const check = () => {
        setOpen(true);
        if (feelings === '' || understanding === '' || supported === '') {
            Swal.fire({
                title: 'Invalid Inputs',
                icon: 'error',
                text: 'Missing inputs somewhere',
                confirmButtonText: 'Ok',
            }).then(result => {
                if (result.isConfirmed) {
                    return false
                }
            }).catch(error => {
                console.log(error);
            })
        } else {
            alert();
        }
    }

    const alert = () => {
        Swal.fire({
            title: 'Warning',
            icon: 'warning',
            text: 'Are you sure?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No'
        }).then(result => {
            if (result.isDenied) {
                return false;
            }
            if (result.isConfirmed) {
                submit();
                history.push('/success');
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const submit = () => {
        axios.post('/', {
            feelings: feelings,
            understanding: understanding,
            supported: supported,
            comments: comments
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
            alert(`Error Found: ${error}`);
        })
    }

    return (
        <div className='Review'>
            <header className='Review-header'>
                <h1 className='Review-title'>Review</h1>
            </header>
            <h2>Review Your Feedback</h2>
            <div id="gridContainer">
                
            </div>
            <div>
                <h3>Feelings: {feelings}</h3>
                <h3>Understanding: {understanding}</h3>
                <h3>Support: {supported}</h3>
                <h3>Comments: {comments}</h3>
            </div>
            <div>
                <Button variant="contained" color="secondary" onClick={check}>Next</Button>
            </div>
            <SnackBar open={open} setOpen={setOpen}/>
        </div>
    );
}

export default Review;
