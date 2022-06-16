import React, {useState} from 'react';
import './Understanding.css';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();

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
    dispatch({type: 'SAVE_UNDERSTANDING', payload: feelNum});
    history.push('/supported');
  }

  return (
    <div className='Understanding'>
      <header className='Understanding-header'>
        <h1 className='Understanding-title'>Understanding</h1>
        <h2>How well are you understanding the content?</h2>
        <form>
          <input onChange={change} value={feelNum} placeholder="i.e. #1-5"/>
          <button onClick={check} type="number">Next</button>
        </form>
      </header>
    </div>
  );
}

export default Understanding;
