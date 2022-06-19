import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Home.css';
import Swal from 'sweetalert2';
import {Stack, Button} from '@mui/material';
import SnackBar from '../SnackBar/SnackBar';

function Home() {

    const [open, setOpen] = useState(false);
    
    const history = useHistory();

    const ready = () => {
        setOpen(true);
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
        setOpen(true);
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
                <Stack spacing={20} direction="row" justifyContent="center">
                    <Button className="pill-buttons" variant="contained" sx={{color: "white", backgroundColor: 'red', borderColor: 'black'}} onClick={ready}>Red Pill</Button>
                    <Button className="pill-buttons" variant="contained" sx={{ color: 'white', backgroundColor: 'blue', borderColor: 'black'}} onClick={notReady}>Blue Pill</Button>
                </Stack>
                <SnackBar open={open} setOpen={setOpen}/>
            </div>
        </div>
    );
}

export default Home;
