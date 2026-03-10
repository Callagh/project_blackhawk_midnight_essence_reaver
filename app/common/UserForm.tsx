import { TextField, Box, Typography,Button } from '@mui/material';
import {createUser} from "../../service/userService"
import { useState } from 'react';
 
interface UserFormProps {
  type: "signUp" | "login";
}
 
export default function UserForm({ type }: UserFormProps) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

async function handleSubmit ()
    
       { 
        const userCreation  = await createUser({email, password})
        console.log("Successful userCreation");
    }


  let message = "";
 
  if (type === "signUp") {
    message = "Sign Up";
  } else if (type === "login") {
    message = "Login";
  } else{
    return
  }
 
  return (
    <Box
    component="form"
    onSubmit={handleSubmit}
    sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"#00FF00",
        width:"fit-content"
    }}
    >
      <Typography>{message}</Typography>
      <TextField label="email" variant="outlined" value="email" onChange={setEmail(email)}/>
      <TextField label="password" variant="outlined" value="password"  onChange={setPassword(password)}/>
      <Button type="submit"/>
    </Box>
  );
}