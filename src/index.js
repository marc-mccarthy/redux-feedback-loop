import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const feelingRed = (state = '', action) => {
  if (action.type === 'SAVE_FEELING') {
    state = action.payload;
  }
  return state;
}

const understandingRed = (state = '', action) => {
  if (action.type === 'SAVE_UNDERSTANDING') {
    state = action.payload;
  }
  return state;
}

const supportedRed = (state = '', action) => {
  if (action.type === 'SAVE_SUPPORTED') {
    state = action.payload;
  }
  return state;
}

const commentsRed = (state = '', action) => {
  if (action.type === 'SAVE_COMMENTS') {
    state = action.payload;
  }
  return state;
}

const store = createStore(
  combineReducers({
    feelingRed,
    understandingRed,
    supportedRed,
    commentsRed
  })
)

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
