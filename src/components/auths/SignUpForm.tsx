import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Link from '@mui/material/Link';

export default function SignUpForm() {

  const [dataForm, setDataForm] = useState({username:"", password:"", confirmPassword:"", error:{element:"", message:""}})

  const handleSignUpConfirm=()=>{
      
        validate();
  }
  const onUsernameChanged=(event: any)=>{
     
      
         setDataForm(prev => ({
                  ...prev,
                  username: event.target.value
                }));
         validate();
  }

  const onPasswordChanged=(event: any)=>{
         
         setDataForm(prev => ({
                  ...prev,
                  password: event.target.value
                }));
        
         validate();
  }
  const onPasswordConfirmChanged=(event: any)=>{
        
       
         setDataForm(prev => ({
                  ...prev,
                  confirmPassword: event.target.value
                }));
         validate();
         

  }

  const validate=()=>{
        const data = {error:{element:"", message:""}};
         if(dataForm.confirmPassword.length > 0 && dataForm.password !== dataForm.confirmPassword)
         {
          data.error.element = "confirmPassword";
          data.error.message = "Password confirm not matched to password";
         }
         else if(dataForm.password.length > 0 && dataForm.password.length < 8)
         {
          data.error.element = "password";
          data.error.message = "Password should has more than 8 characters";
         }
         else if(dataForm.username.length < 3)
         {
          data.error.element = "username";
          data.error.message = "Username should has more than 3 characters";
         }
         else 
         {
          data.error.element ="";
          data.error.message ="";

         }

         setDataForm(prev => ({
                  ...prev,
                  error: data.error
                }));
         
        
         console.log(dataForm);
  }

  

  return (
    
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      Sigup Form
      <Box sx={{marginTop:2}}>
      <TextField
        required
        error={dataForm.error.element === "username"}
        id="outlined-required"
        label="Username"
        defaultValue="Username"
        onChange={onUsernameChanged}
        helperText={(dataForm.error.element === "username")? dataForm.error.message :""}
      />
      </Box>
      <Box sx={{marginTop:2}}>
    <TextField
        required
        error={dataForm.error.element === "password"}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={onPasswordChanged}
        helperText={(dataForm.error.element === "password")? dataForm.error.message :""}
      />
      </Box>
    <Box sx={{marginTop:2}}>
    <TextField
        required
        error={dataForm.error.element === "confirmPassword"}
        id="outlined-password-input"
        label="Confirm password"
        type="password"
        autoComplete="current-password"
        onChange={onPasswordConfirmChanged}
        helperText={(dataForm.error.element === "confirmPassword")? dataForm.error.message :""}
      />
      </Box>
      <Box sx={{marginTop:2}}>
        <Link href="/login" underline="none" sx={{marginRight:2}}>
            {'sign in'}
          </Link> 
    <Button variant="contained" onClick={handleSignUpConfirm}>SIGN UP</Button>
    </Box>
    </Box>
  );
}