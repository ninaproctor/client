import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { useEffect } from 'react';


function App() {


useEffect(() => {
 const socket = io()
}, [])



  return (
  <div> Hello socket 
    <Button varient='text'>Text</Button>


   </div>
   
  );
}

export default App;
