
import type {BaseProps} from "@bangcao2020/reactsync";
import NavBar from "../NavBar";

export default class NavBarMobile extends NavBar {
  // This class inherited state from NavBar
  constructor(props:BaseProps)
  {
    super(props);
  }
  
  override onClick(item): void {
     
      this.syncData.menu[this.props.data.type] = item;
      
      if(this.props.data.type === "nav")
      {
        this.syncData.menu[this.props.data.type] = item;
        this.syncData.menu["isShowCategory"] = true;
        this.syncData.menu["open"] = true;
      }
      else if (this.props.data.type === "master")
      {
        this.syncData.menu["isShowCategory"] = false;
        this.syncData.menu["open"] = true;
      }
      
      this.syncList(["masterNavBarMobile", "navBarMobile", "categoryNavBarMobile", "headerMobile", "menuDrawer"]);
  }
  
  
  render () {
   
    return(
      <div className="row bg-warning custom-row">
           
                  <ul className="nav">
                   {this.state.menuItems.map((item : any, index: number) =>{

                    return <li className="nav-item" key={index}>
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

    )
  }  
} 
