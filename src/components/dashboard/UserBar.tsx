
import BaseComponent , {ButtonComponent, CounterComponent} from "@bangcao2020/reactsync";

import type {BaseProps} from "@bangcao2020/reactsync";



export default class UserBar extends BaseComponent {
    state = {
    count: this.props.data.count,
   };
    
    constructor(props:BaseProps)
  {
    super(props);
  }
  override clickHandler(): void {
      // You send message, data to another component by Id.
      this.send({message:"hello", id: this.props.id});
      
      
  }
  // Where you get the message, data from other components
  override onNotified(event:any) : void
    {
       this.setState({count: event.data.count})
     
    }
  componentDidMount(): void {
  
  }
  render () {
    return(
      <div>
       <ButtonComponent id="logoutBtn">Li</ButtonComponent>
  
      <CounterComponent id="counterBtn" data={{role:"consummer", syncers:["avatarBtn"]}}>.</CounterComponent>
       <ButtonComponent id="avatarBtn" data={{receiverId:"mainLayout"}}>Ze</ButtonComponent>
      
     </div>

    )
  }  
} 
