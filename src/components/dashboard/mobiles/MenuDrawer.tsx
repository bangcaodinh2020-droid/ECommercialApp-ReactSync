
import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";
import HeaderMobile from "./HeaderMobile";

export default class MenuDrawer extends BaseComponent {
  state={
    isShowCategory: false,
    category:"",
    isScrollable: false,
  }
    
    constructor(props:BaseProps)
  {
    super(props);
    
  }
  componentDidMount(): void {
    super.componentDidMount();

  }
  onSynchronized(data: any): void {
    
  
    if(this.syncData !== undefined && this.syncData.menu !== undefined)
    {
       
    this.setState({
      isShowCategory: this.syncData.menu["isShowCategory"],
      category: this.syncData.menu["category"],
    })
   }
  
   
    
  }
  
  onBackBtnClick():void
  {
    
    this.syncData.menu["category"] = "";
    this.syncData.menu["isShowCategory"] = false;
    this.setState({isShowCategory: false});
  
    this.syncList(["headerMobile"]);
  }

  onSearchBtnClick():void
  {

  }
  onSearchInputChanged():void
  {

  }

 
  render () {
  
    return(
      <div className="bg-info custom-row" >
        <div className="custom-row row py-1">
          <div className="col-2">
            <a className="btn btn-warning" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              ...
            </a>
          </div>
          <div className="row col-10">
            <input className="btn btn-light col-8"  type="text" defaultValue={"something to search"} onChange={this.onSearchInputChanged} ></input>
            <button className="btn bg-danger col-3 mx-1"  type="submit" value={"Search"} onClick={()=>{this.onSearchBtnClick()}} >SEARCH</button>
          </div>
        </div>
        <div className="row">{this.state.category}</div>


        <div className="offcanvas offcanvas-start w-100 "    tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header bg-info">
            {this.state.isShowCategory === false ? <h5 className="offcanvas-title" id="offcanvasExampleLabel">
               Mini-Shop</h5> : <div onClick={()=>{this.onBackBtnClick()}}>Back</div>}
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <HeaderMobile id={"headerMobile"}/>
            
          </div>
        </div>
        
      </div>

    )
  }  
} 
