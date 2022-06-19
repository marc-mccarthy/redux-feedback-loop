import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Admin.css';
import AdminItem from '../AdminItem/AdminItem';

function Admin() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getFeedback()
    }, [])

    const getFeedback = () => {
        axios.get('/feedback').then(response => {
            setData(response.data);
        }).catch(error => {
            console.log(error);
            alert(`Error Found: ${error}`)
        })
    }

    return (
        <div className="Admin-body">
            <table>
                <thead>
                    <tr>
                        <th>Flagged</th>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Supported</th>
                        <th>Comments</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((instance, i) => (<AdminItem getFeedback={getFeedback} key={i} instance={instance}/>))}
                </tbody>
            </table>
        </div>
    )

}

export default Admin;
