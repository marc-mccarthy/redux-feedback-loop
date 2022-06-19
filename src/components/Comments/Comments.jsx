import React, {useState} from 'react';
import './Comments.css';
import {useDispatch} from 'react-redux';
import {Button, Stack} from '@mui/material';
import {useHistory} from 'react-router-dom';

function Comments() {

    const [feelCom, setFeelCom] = useState('');
    
    const dispatch = useDispatch();
    const history = useHistory();

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
            </header>
            <div>
                <h2>Any comments you want to leave?</h2>
                <Stack spacing={2} direction="row" justifyContent="center">
                    <input onChange={change} value={feelCom} type="text" placeholder="i.e. This is so fun"/>
                    <Button variant="contained" color="secondary" onClick={submit}>Next</Button>
                </Stack>
            </div>
        </div>
    );
}

export default Comments;
