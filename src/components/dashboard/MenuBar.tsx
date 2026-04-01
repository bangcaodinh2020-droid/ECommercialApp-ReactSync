
import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";
import MenuItem from "./MenuItem";
import Box from '@mui/material/Box';
import List from '@mui/material/List';



export default class MenuBar extends BaseComponent {
    state = {
    menuItems: [],
   };
    
  constructor(props:BaseProps)
  {
    super(props);
  }
  override clickHandler(): void {
      this.send({message:"hello", id: this.props.id});
  }
  componentDidMount(): void {
    
      this.setState({menuItems: this.props.data });
     
  }
  render () {
    
    return(
      <Box sx={{ width: '100%', maxWidth: 360, height:'100%', bgcolor: 'background.paper' }}>
      <nav>
        <List>
        
        {this.state.menuItems.map((item, index) => (
          <MenuItem id={"menuItem" + index} data={{title: item.title, path: item.path}} key={""+index}></MenuItem>
        ))}
      
        </List>
      </nav>
    </Box>

    )
  }  
} 
