
import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";

import { ladiesMenuItems, gentlementMenuItems, issueMenuItems } from "../mockData";


export default class NavBar extends BaseComponent {
   // Define your state here
    state = {
    menuItems: [],
    hoveredItem:"",
   };
    
  constructor(props:BaseProps)
  {
    super(props);
    // Remember to set it as consummer. In this example, we use app as central store.
    this.setAsConsummer();
  }
  override clickHandler(): void {
      this.send({message:"hello", id: this.props.id});
  }
  onClick(item): void {
     
      this.syncData.menu[this.props.data.type] = item;
      // You send the message to a list of component.
      this.syncList(["masterNavBar", "navBar", "categoryNavBar"]);
  }
  onMouseOver(item):void{
      
       this.setState({hoveredItem: item });
      
      if(this.props.data.type === "nav")
      {
        this.syncData.menu[this.props.data.type] = item;
        this.syncData.menu["category"] = "open";
        // You send the message to a list of component.
        this.syncList(["categoryNavBar"]);
      }
  }
  // Where you get the message, data from other component
  override onSynchronized(): void {
      var items = this.props.data.menuItems;
      
      if(this.props.data.type === "nav")
      {
        
        if(this.syncData.menu["master"] === "Ladies")
        {
             items = ladiesMenuItems;
        }
        else if(this.syncData.menu["master"] === "Gentlemen")
        {
             items = gentlementMenuItems;
        }
        else if(this.syncData.menu["master"] === "Issue")
        {
             items = issueMenuItems;
        }

      }
      this.setState({menuItems: items});
  }
  render () {
   
    return(
      <div className="row bg-info">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                
                <div
                  className="collapse navbar-collapse row"
                  id="navbarSupportedContent"
                >
                 
                  <ul className="navbar-nav col-9">
                   {this.state.menuItems.map((item : any, index: number) =>{

                    return <li className={(this.state.hoveredItem == item.title)? "nav-item border-bottom border-bottom-1 border-danger":"nav-item"} key={index}>
                      <a
                        className="nav-link"
                        aria-current="page"
                        href={"#"}
                        onClick={()=>{this.onClick(item.title)}}
                        onMouseOver={()=>{this.onMouseOver(item.title)}}
                      >
                        {item.title}
                      </a>
                    </li>

                   })}
                    
                    
                  </ul>
                 
                </div>
              </div>
            </nav>
          </div>

    )
  }  
} 
