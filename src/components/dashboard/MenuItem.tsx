import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default class MenuItem extends BaseComponent {
    state = {
    title: "untitled",
    path:"",
    navigate :null,

   };
  constructor(props:BaseProps)
  {
    super(props);
   
  }
  componentDidMount(): void {
    
      this.setState({title: this.props.data.title,
        path: this.props.data.path,
       });
       
      
  }
  render () {
    
    return(

      <ListItem disablePadding>
            <ListItemButton onClick={this.clickHandler.bind(this)} component={Link}
               to={this.props.data.path}>
              {/* <ListItemIcon>
                
                  
      
              </ListItemIcon> */}
              <ListItemText primary={this.state.title} />
             
            </ListItemButton>
          </ListItem>
      
    )
  }  
} 
