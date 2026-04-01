import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function LoginForm() {
  const dataForm={username:"", password:"", error:{element:"", message:""}};
  const handleSignUpConfirm=()=>{
      
        validate();
  }
  const onUsernameChanged=(event: any)=>{
    

  }

  const onPasswordChanged=(event: any)=>{
         
   
         
  }
  const validate=()=>{
      
  }
  return (
    <Box component="section" sx={{ p: 2, border: '0px dashed grey' }}>
      Sign In
      <Box sx={{marginTop:2}}>
      <TextField
          required
          error={dataForm.error.element === "username"}
          id="outlined-required"
          label="Required"
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

          <Link href="/signup" underline="none" sx={{marginRight:2}}>
            {'sign up'}
          </Link> 
        <Button variant="contained" onClick={handleSignUpConfirm}>SIGN IN</Button>
        </Box>
    </Box>
  );
}