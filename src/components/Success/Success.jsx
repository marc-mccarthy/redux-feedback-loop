import React from 'react';
import {useHistory} from 'react-router-dom';
import './Success.css';
import {useDispatch} from 'react-redux';

function Success() {
    const history = useHistory();
    const dispatch = useDispatch();

    const startOver = () => {
        dispatch({type: 'CLEAR_REDUCERS', state: ''})
        history.push('/feelings');
    }

    return (
        <div className='Success'>
            <header className='Success-header'>
                <h1 className='Success-title'>Success</h1>
                <div>
                    <h2>Would you like to provide another round of feedback?</h2>
                    <button onClick={startOver}>Yes I Would</button>
                </div>
            </header>
        </div>
    );
}

export default Success;
