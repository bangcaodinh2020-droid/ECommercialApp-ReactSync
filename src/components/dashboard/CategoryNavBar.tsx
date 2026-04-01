
import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";

import NavBar from "./NavBar";
import {getCategory} from "../mockData";

export default class CategoryNavBar extends NavBar {
    state = {
    menuItems: [],
    hoveredItem:"",
    open: false,
   };
    
    constructor(props:BaseProps)
  {
    super(props);
    this.setAsConsummer();
  }
  
  onSynchronized(): void {
    
      this.setState({menuItems: this.props.data.menuItems });
      this.setState({open: (this.syncData.menu["category"] == "open")});
      const tmp = this.syncData.menu["master"]  + "-"+ this.syncData.menu["nav"];
      this.setState({menuItems: getCategory(tmp) });
      
  }
  onClick(item): void {
     
      this.syncData.menu["category"] = item;
  }
  onMouseOverSubItem(item):void{
      this.setState({hoveredItem: item });
     
  }
  onMouseOver(item):void{
      this.setState({open: true });
  }
   onMouseOut(item):void{
      
      
       this.setState({open: false });

   }

  render () {
    
    return(
      <div className="row z-3 position-absolute py-0 px-0 bg-danger w-100" 
      onMouseOver={()=>{this.onMouseOver("open")}} 
      onMouseOut={()=>{this.onMouseOut("open")}} >
            {this.state.open && <>
            {this.state.menuItems.map((item: any, i)=>{
              return <div className="col-3" key={i}>
                {item.groupName}
                <ul>
                  {item.items.map((subItem:any, index: number)=>{
                      return <li className={(this.state.hoveredItem == subItem.title)? "nav-item border-bottom border-bottom-1 border-light":"nav-item"} key={index}
                           onMouseOver={()=>{this.onMouseOverSubItem(subItem.title)}} 
                      >
                      <a
                        className="nav-link"
                        aria-current="page"
                        href={"#"}
                        onClick={()=>{this.onClick(subItem.title)}}
                      >
                        {subItem.title}
                      </a>
                    </li>
                  })}
                </ul>
                 
              </div>
            })}
            </>}
    </div>

    )
  }  
} 
