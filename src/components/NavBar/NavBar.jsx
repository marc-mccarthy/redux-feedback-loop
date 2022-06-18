import React from 'react';
import './NavBar.css';
import {Stack, Link} from '@mui/material';

function NavBar() {

    return (
        <div className='NavBar'>
            <nav className='NavBar-title'>
                <Stack spacing={5} direction="row">
                    <Link href="/#/" exact sx={{color: "yellow"}} underline="hover">Home</Link>
                    <Link href="/#/feelings" sx={{color: "yellow"}} underline="hover">Feelings</Link>
                    <Link href="/#/understanding" sx={{color: "yellow"}} underline="hover">Understanding</Link>
                    <Link href="/#/supported" sx={{color: "yellow"}} underline="hover">Supported</Link>
                    <Link href="/#/comments" sx={{color: "yellow"}} underline="hover">Comments</Link>
                    <Link href="/#/review" sx={{color: "yellow"}} underline="hover">Review</Link>
                </Stack>
            </nav>
        </div>
    );
}

export default NavBar;
