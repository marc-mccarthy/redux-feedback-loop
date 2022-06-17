import React, {useState} from 'react';
import './Feelings.css';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Feelings() {
    const dispatch = useDispatch();
    const history = useHistory();
    const test = useSelector(store => store.feelingsReducer)

    const [feelNum, setFeelNum] = useState(0);

    const change = (event) => {
        setFeelNum(event.target.value);
    }

    const check = () => {
        if (feelNum >= 0 && feelNum < 6) {
            submit();
            setFeelNum('');
        } else {
            Swal.fire({
                title: 'Invalid Input',
                icon: 'error',
                text: 'Must be 0 through 5.',
                confirmButtonText: 'Ok'
            }).then(result => {
                if (result.isConfirmed) {
                    return false;
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }

    const submit = () => {
        dispatch({type: 'SAVE_FEELINGS', payload: feelNum});
        history.push('/understanding');
    }

    return (
        <div className='Feelings'>
            <header className='Feelings-header'>
                <h1 className='Feelings-title'>Feeling</h1>
                <h2>Test: {test}</h2>
                <h2>How are you feeling today?</h2>
                <div>
                    <input onChange={change} value={feelNum} type="number" placeholder="i.e. #1-5"/>
                    <button onClick={check}>Next</button>
                </div>
            </header>
        </div>
    );
}

export default Feelings;
