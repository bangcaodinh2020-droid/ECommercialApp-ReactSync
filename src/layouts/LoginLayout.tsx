import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";

import { Box, Grid, } from "@mui/material";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import NavBar from "../components/dashboard/NavBar";
import IntroForm from "../components/auths/IntroForm"
const menuItems=[
    {title:"Overview", path:"/home"},
    {title:"User Manager", path:"/user"},
    {title:"Create Post", path:"/post"},
    
]

const Item = styled(Paper)(({ theme }) => ({
  height:'100%',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
export default class LoginLayout extends BaseComponent {
  state = {
    data:{count: 1},
   };
    constructor(props:BaseProps)
  {
    super(props);
  }
  override clickHandler(): void {
      //this.send({message:"hello", id: this.props.id});
  }

  override onNotified(event:any) : void
    {
      //alert("On receivered " + event.senderId);
      this.state.data.count +=1;
      this.send({message:"hello", receiverId: "",senderId: this.props.id, data:this.state.data}); 
  
    }
  render () {

    const {children } = this.props;
    return(
      

        <Box sx={{ flexGrow: 1, height: "100vh"}}>
        
       <Grid container spacing={2}>
               <Grid size={12}><Item>
                {/* <NavBar id="navBar" data={menuItems}></NavBar> */}
                </Item></Grid>
             
       
               </Grid>

      <Grid container spacing={2} sx={{display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      height: '70%',}}>

        <Grid size={{ xs: 12, sm:6, md: 6 }}>
          <Item>
             <IntroForm></IntroForm>
           </Item>
        </Grid>
        <Grid size={{ xs: 12, sm:6, md: 6 }}>
          
          <Item>
             {children}
           </Item>
        </Grid>
      </Grid>
    </Box>
         


      
    )
  }  
} 