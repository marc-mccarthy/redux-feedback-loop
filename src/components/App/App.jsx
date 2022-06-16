import React from 'react';
import axios from 'axios';
import './App.css';
import {Route, HashRouter as Router} from 'react-router-dom';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>
      <Router>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/feeling">
          <Feeling/>
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
      </Router>
    </div>
  );
}

export default App;
