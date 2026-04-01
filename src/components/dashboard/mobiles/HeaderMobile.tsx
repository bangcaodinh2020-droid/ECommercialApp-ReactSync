
import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";
import NavBarMobile from "./NavBarMobile";
import NavBarThumMobile from "./NavBarThumbMobile";
import CategoryNavBarMobile from "./CategoryNavBarMobile";
import { masterMenuItems, ladiesMenuItems, subLadiesMenuItems } from "../../mockData";

export default class HeaderMobile extends BaseComponent {
  state={
    isOpenCategory: false,
  }
    
  constructor(props:BaseProps)
  {
    super(props);
  }

 onSynchronized(data: any): void {
   this.setState({isOpenCategory: (this.syncData !== undefined && this.syncData.menu !== undefined && this.syncData.menu["isShowCategory"] === true)})
 }
  
  render () {
  
    return(
      <div className="custom-row bg-warning">

        {this.state.isOpenCategory === false && <>
         <div className="custom-row bg-danger">
          <NavBarMobile id="masterNavBarMobile" data={{menuItems: masterMenuItems, type:"master"}}/></div>
         <div className="custom-row ">
          <NavBarThumMobile id="navBarMobile" data={{menuItems: ladiesMenuItems, type:"nav"}}/></div>
         </>}
        {this.state.isOpenCategory === true && <div className=" custom-row bg-light">
          <CategoryNavBarMobile id="categoryNavBarMobile" data={{menuItems: subLadiesMenuItems, type:"category"}}/>
          </div>}
        
      </div>

    )
  }  
} 
