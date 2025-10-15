import Button from '@mui/material/Button';
import DeleteIcon from "@mui/icons-material/Delete"
import { useReducer } from 'react';
 

function MuiPractice(){
   
   return(
        <>
        <Button color='primary' variant='outlined'>Click</Button>
        <Button color='primary' variant='contained'>Click</Button>
        <Button color='secondary' variant='outlined' size='small'>Click</Button>
        <Button color='primary' variant='outlined' size='medium'>Click</Button>
        <Button color='primary' variant='outlined' size='large'>Click</Button>
        <Button size='large'>Click</Button>
        <Button variant='outlined' color='error' startIcon={<DeleteIcon/>}>Delete</Button>
        
        </>
    )
}
export default MuiPractice;