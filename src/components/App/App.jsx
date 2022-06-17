import React from 'react';
import './App.css';
import {Route, HashRouter as Router} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <NavBar/>
            </header>
            <Router>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/feelings">
                    <Feelings/>
                </Route>
                <Route path="/understanding">
                    <Understanding/>
                </Route>
                <Route path="/supported">
                    <Supported/>
                </Route>
                <Route path="/comments">
                    <Comments/>
                </Route>
                <Route path="/review">
                    <Review/>
                </Route>
                <Route path="/success">
                    <Success/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
