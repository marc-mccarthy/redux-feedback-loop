import React from 'react';
import './NavBar.css';

function NavBar() {

    return (
        <div className='NavBar'>
            <nav className='NavBar-title'>
                <a href="/#/">Home</a>
                <a href="/#/feelings">Feelings</a>
                <a href="/#/understanding">Understanding</a>
                <a href="/#/supported">Supported</a>
                <a href="/#/comments">Comments</a>
                <a href="/#/review">Review</a>
            </nav>
        </div>
    );
}

export default NavBar;
