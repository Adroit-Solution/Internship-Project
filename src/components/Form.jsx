import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Form() {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const handleOnSubmit = (e) => {
        alert("Username "+userName+" Password "+password);
    }
    return ( 
        <div>
            <br/>
            <Typography variant="h4" component="h4">
                Login Form
            </Typography>
            <br/>
            <div style={{width:"fit",height:"auto"}}>
            <TextField 
                id="standard-basic" 
                label="UserName" 
                variant="standard" 
                onChange={(e) => setUserName(e.target.value)}
                />
            <br/><br/>
            <TextField 
                id="standard-basic" 
                label="Password" 
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
             />
            <br/><br/>
            <Button variant="contained"  onClick={handleOnSubmit}>Login</Button>
            </div>
            <br/><br/>
        </div>
    );
}

export default Form;