import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './AdminItem.css';
import {Button} from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

function AdminItem(props) {

    const switchFlag = () => {
        axios.put(`/feedback?id=${props.instance.id}&flag=${!props.instance.flagged}`).then(response => {
            props.getFeedback();
        }).catch(error => {
            console.log(error);
            alert(`Error Found: ${error}`)
        })
    }

    return (
        <tr>
            <td>
                <Button onClick={switchFlag}>
                    {props.instance.flagged ? <FlagIcon/> : <FlagOutlinedIcon/>}
                </Button>
            </td>
            <td>{props.instance.feeling}</td>
            <td>{props.instance.understanding}</td>
            <td>{props.instance.support}</td>
            <td>{props.instance.comments}</td>
        </tr>
    )
}

export default AdminItem;
