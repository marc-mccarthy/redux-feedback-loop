// import React from 'react';
import * as React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Home.css';
import Swal from 'sweetalert2';
import {Stack, Snackbar} from '@mui/material';
import {Button} from '@mui/material';


function Home() {
    const history = useHistory();
    const [open, setOpen] = useState(false);

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
                setOpen(true);
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
                    <Stack spacing={15} direction="row">
                        <Button className="pill-buttons" variant="contained" sx={{color: "white", backgroundColor: 'red', borderColor: 'black' }} onClick={ready}>Red Pill</Button>
                        <Button className="pill-buttons" variant="contained" sx={{ color: 'white', backgroundColor: 'blue', borderColor: 'black' }} onClick={notReady}>Blue Pill</Button>
                    </Stack>
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        message="Note archived"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
