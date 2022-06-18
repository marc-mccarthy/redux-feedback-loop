import React from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './Review.css';
import Swal from 'sweetalert2';
import {useSelector} from 'react-redux';

function Review() {
    const history = useHistory();
    const feelings = useSelector(store => store.feelingsReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const supported = useSelector(store => store.supportedReducer);
    const comments = useSelector(store => store.commentsReducer);

    const check = () => {
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
        }
    }

    const alert = () => {
        Swal.fire({
            title: 'Warning',
            icon: 'warning',
            text: 'Are you sure',
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
        axios.post('/feedback', {
            feelings: feelings,
            understanding: understanding,
            supported: supported,
            comments: comments
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='Review'>
            <header className='Review-header'>
                <h1 className='Review-title'>Review</h1>
                <h2>Review Your Feedback</h2>
                <div>
                    <h3>Feelings: {feelings}</h3>
                    <h3>Understanding: {understanding}</h3>
                    <h3>Support: {supported}</h3>
                    <h3>Comments: {comments}</h3>
                </div>
                <div>
                    <button onClick={check}>Submit</button>
                </div>
            </header>
        </div>
    );
}

export default Review;
