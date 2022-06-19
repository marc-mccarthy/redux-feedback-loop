import React from 'react';
import './NavBar.css';
import {Stack, Link} from '@mui/material';

function NavBar() {

    return (
        <nav className='NavBar'>
            <Stack spacing={5} direction="row" justify-content="center">
                <Link href="/#/admin" sx={{color: "lightgrey"}} underline="hover">Admin</Link>
                <Link href="/#/" exact sx={{color: "orange"}} underline="hover">Home</Link>
                <Link href="/#/feelings" sx={{color: "orange"}} underline="hover">Feelings</Link>
                <Link href="/#/understanding" sx={{color: "orange"}} underline="hover">Understanding</Link>
                <Link href="/#/supported" sx={{color: "orange"}} underline="hover">Supported</Link>
                <Link href="/#/comments" sx={{color: "orange"}} underline="hover">Comments</Link>
                <Link href="/#/review" sx={{color: "orange"}} underline="hover">Review</Link>
            </Stack>
        </nav>
    );
}

export default NavBar;
