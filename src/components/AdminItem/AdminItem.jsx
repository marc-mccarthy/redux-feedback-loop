import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './AdminItem.css';
import {Button} from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { green } from '@mui/material/colors';

function AdminItem(props) {

    const switchFlag = () => {
        axios.put(`/feedback?id=${props.instance.id}&flag=${!props.instance.flagged}`).then(response => {
            props.getFeedback();
        }).catch(error => {
            console.log(error);
            alert(`Error Found: ${error}`)
        })
    }

    const checkDelete = () => {
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
            } else if (result.isConfirmed) {
                deleteInstance();
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteInstance = () => {
        axios.delete(`/feedback?id=${props.instance.id}`).then(response => {
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
                    {props.instance.flagged ? <FlagIcon sx={{color: "green"}}/> : <FlagOutlinedIcon sx={{color: "green"}}/>}
                </Button>
            </td>
            <td>{props.instance.feeling}</td>
            <td>{props.instance.understanding}</td>
            <td>{props.instance.support}</td>
            <td>{props.instance.comments}</td>
            <td>
                <Button onClick={checkDelete}>
                    <DeleteIcon sx={{color: "green"}}/>
                </Button>
            </td>
        </tr>
    )
}

export default AdminItem;
