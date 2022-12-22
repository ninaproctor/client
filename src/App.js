import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react';
import {io} from 'socket.io-client'

function App() {
  const [socket, setSocket] = useState(null)
 
useEffect(() => {
  setSocket = (io("http://localhost:4000"))
}, [])

function handleForm(e) {
e.preventDefault()
socket.emit('send-message')
setMessage('')
}


  return (
  <div>   
    <Box component="form" onSubmit={handleForm}>
      <TextField 
      size="small"
      id="stadard-basic" 
      label="Write your message here" 
      variant="standard"   
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      
      />
    <Button varient="text" type="submit">
      Send
    </Button>
    </Box>
    


   </div>
   
  );
}

export default App;
