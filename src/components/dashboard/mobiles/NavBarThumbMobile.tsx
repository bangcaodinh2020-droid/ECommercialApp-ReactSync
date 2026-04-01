
import type {BaseProps} from "@bangcao2020/reactsync";
import NavBarMobile from "./NavBarMobile";

export default class NavBarThumMobile extends NavBarMobile {
   
  constructor(props:BaseProps)
  {
    super(props);
  }
  

  render () {
   
    return(
      <div className="row bg-light custom-row">
           
                  
        {this.state.menuItems.map((item : any, index: number) =>{

        return <div className="border border-1 border-info col-5 rounded-2 m-2" key={index} style={{height:150}} onClick={()=>{this.onClick(item.title)}} >
          <img src="/imgs/logo.png" className="" height={100}/>
          <a
            className="nav-link"
            aria-current="page"
            href={"#"}
            
          >
            {item.title}
          </a>
        </div>

        })}
                    
                    
                 
                 
             
          </div>

    )
  }  
} 
