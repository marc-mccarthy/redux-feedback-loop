import React, {useState} from 'react';
import './Feeling.css';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Feeling() {
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
    dispatch({type: 'SAVE_FEELING', payload: feelNum});
    history.push('/understanding');
  }

  return (
    <div className='Feeling'>
      <header className='Feeling-header'>
        <h1 className='Feeling-title'>Feeling</h1>
        <h2>How are you feeling today?</h2>
        <form>
          <input onChange={change} value={feelNum} placeholder="i.e. #1-5"/>
          <button onClick={check} type="number">Next</button>
        </form>
      </header>
    </div>
  );
}

export default Feeling;
