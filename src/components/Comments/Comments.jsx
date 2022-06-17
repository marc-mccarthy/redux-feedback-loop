import React, {useState} from 'react';
import './Comments.css';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feelCom, setFeelCom] = useState('');

    const change = (event) => {
        setFeelCom(event.target.value);
    }

    const submit = () => {
        dispatch({type: 'SAVE_COMMENTS', payload: feelCom});
        history.push('/review');
    }

    return (
        <div className='Comments'>
            <header className='Comments-header'>
                <h1 className='Comments-title'>Comments</h1>
                <h2>Any comments you want to leave?</h2>
                <div>
                    <input onChange={change} value={feelCom} type="text" placeholder="Gimme something"/>
                    <button onClick={submit}>Next</button>
                </div>
            </header>
        </div>
    );
}

export default Comments;
