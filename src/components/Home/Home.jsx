import React from 'react';
import {useHistory} from 'react-router-dom';
import './Home.css';
import Swal from 'sweetalert2';
import redPill from '../../images/red-pill.ico';
import bluePill from '../../images/blue-pill.ico';

function Home() {
    const history = useHistory();

    const ready = () => {
        Swal.fire({
            title: 'Warning',
            icon: 'warning',
            text: 'Enter the Feedback Matrix?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No'
        }).then(result => {
            if (result.isDenied) {
                return false;
            } else if (result.isConfirmed) {
                history.push('/feelings');
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const notReady = () => {
        Swal.fire({
            title: 'Not Ready',
            text: 'You may go back to sleep.',
            confirmButtonText: 'Ok',
        }).then(result => {
            if (result.isConfirmed) {
                return false;
            }
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='Home'>
            <header className='Home-header'>
                <h1 className='Home-title'>Home</h1>
            </header>
            <div>
                <h2>Shall we get started?</h2>
                <div className='flex-container'>
                    <button onClick={ready}><img src={redPill} alt="Red Pill"/></button>
                    <button onClick={notReady}><img src={bluePill} alt="Blue Pill"/></button>
                </div>
            </div> 
        </div>
    );
}

export default Home;
