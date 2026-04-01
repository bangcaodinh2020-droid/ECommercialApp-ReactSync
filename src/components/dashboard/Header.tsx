
import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";
import NavBar from "./NavBar";
import CategoryNavBar from "./CategoryNavBar";
import MenuDrawer from "./mobiles/MenuDrawer";
import { masterMenuItems, ladiesMenuItems, subLadiesMenuItems } from "../mockData";


export default class Header extends BaseComponent {
  state={
    isMobile: false,
  }
    
    constructor(props:BaseProps)
  {
    super(props);
  }

  componentDidMount(): void {
    super.componentDidMount();
    window.addEventListener("resize", ()=>{this.onResize()});
    this.onResize();
    

  }
  onResize()
  {
    this.setState({isMobile:(window.innerWidth <500)})
  }

 
  render () {
  
    return(
    
  
        <div className="row bg-info px-4">
          <div className="row bg-info">
            <div className="col-7 col-md-11">
              <NavBar id="masterNavBar" data={{menuItems: masterMenuItems, type:"master"}}></NavBar>
            </div>
            <div className="col-5 col-md-1">
              {/* <UserBar id="userBar" data={{count:0}}></UserBar> */}
              </div>
          </div>
          <div className="row"><NavBar id="navBar" data={{menuItems: ladiesMenuItems, type:"nav"}}></NavBar></div>
          <div className="bg-light custom-row px-0">
            {this.state.isMobile ? <MenuDrawer id={"menuDrawer"}/> :
            <CategoryNavBar id="categoryNavBar" data={{menuItems: subLadiesMenuItems, type:"categoryr"}}/>}
          </div>
          
        </div>
        
      

    )
  }  
} 
