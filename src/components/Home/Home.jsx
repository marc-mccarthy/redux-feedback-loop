import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import Swal from 'sweetalert2';

function Home() {
  const history = useHistory();
  const [status, setStatus] = useState('');

  const begin = () => {
    Swal.fire({
      title: 'Warning',
      icon: 'warning',
      text: 'Are you sure?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No'
    }).then(result => {
      if (result.isDenied) {
        return false;
      } 
      if (result.isConfirmed) {
        history.push('/feeling');
      }
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='Home'>
      <h2>Shall we get started?</h2>
      <div>
        <button onClick={begin}>Start</button>
        <button onClick={begin}>Nope</button>
      </div>
    </div>
  );
}

export default Home;
