import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const feelingsReducer = (state = '', action) => {
    if (action.type === 'SAVE_FEELINGS') {
        state = action.payload;
    } else if (action.type === 'CLEAR_REDUCERS') {
        state = '';
    }
    return state;
}

const understandingReducer = (state = '', action) => {
    if (action.type === 'SAVE_UNDERSTANDING') {
        state = action.payload;
    } else if (action.type === 'CLEAR_REDUCERS') {
        state = '';
    }
    return state;
}

const supportedReducer = (state = '', action) => {
    if (action.type === 'SAVE_SUPPORTED') {
        state = action.payload;
    } else if (action.type === 'CLEAR_REDUCERS') {
        state = '';
    }
    return state;
}

const commentsReducer = (state = '', action) => {
    if (action.type === 'SAVE_COMMENTS') {
        state = action.payload;
    } else if (action.type === 'CLEAR_REDUCERS') {
        state = '';
    }
    return state;
}

const store = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer
    })
)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
