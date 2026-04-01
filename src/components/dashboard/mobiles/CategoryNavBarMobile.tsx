import type {BaseProps} from "@bangcao2020/reactsync";
import CategoryNavBar from "../CategoryNavBar";
import * as bootstrap from 'bootstrap';


export default class CategoryNavBarMobile extends CategoryNavBar {
    
    constructor(props:BaseProps)
  {
    super(props);
  }
  
 onSynchronized(): void {
    
      super.onSynchronized();
      this.setState({open: (this.syncData.menu["isShowCategory"] === true)});
      
  }
 onClick(item): void {
     
      this.syncData.menu["category"] = item;
      this.syncData.menu["open"] = false;
      this.syncData.menu["isShowCategory"] = false;
      this.syncList(["menuDrawer", "headerMobile"]);
      
  }

  render () {
    
    return(
      <div className="custom-row" 
      onMouseOver={()=>{this.onMouseOver("open")}} 
      onMouseOut={()=>{this.onMouseOut("open")}} >
            {this.state.open && <>
            {this.state.menuItems.map((item: any, i)=>{
              return <div className="custom-row" key={i}>
                <b>{item.groupName}</b>
                <ul className="custom-row">
                  {item.items.map((subItem:any, index: number)=>{
                      return <li className="nav-item border-bottom border-1 custom-row" key={index}>
                       
                      <a
                        className="nav-link"
                        aria-current="page"
                        href={"#"}
                        data-bs-dismiss="offcanvas" 
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
