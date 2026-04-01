import {CardComponent, CardList} from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";

//Where you can customize your component
export class MyCardComponent extends CardComponent {
  
    constructor(props:BaseProps)
  {
    super(props);
    
  }
   
  render () {
    return(
         <>
         <div id={"card_"+ this.id} style={{width:this.props.data.width, height:this.props.data.height}}>
            { (this.state["imageUrl"] !== null && this.state["imageUrl"] !== undefined) && <div>
            <img src={this.state['imageUrl']} width={this.props.data.width} style={{backgroundColor:"ButtonFace"}}></img>
            <div className="">{this.state.row['brandName']}</div>
            <div className="">{this.state.row['title']} {this.state.row["id"]}</div>
            <div className="">{this.state.row['description']}</div>
            <div className="">{this.state.row['price']}</div>
            </div>}
        </div>
        </>
      
    )
  }  
} 

export class MyCardList extends CardList
{

constructor(props:BaseProps)
{
super(props);

}

render(){

        return (
            <div className="px-4"> {this.props.children} 
            
                {this.state.rows.map((row: any[], rowIndex) => (
                  <div key={"row"+ rowIndex} >
                   <CardComponent id={""+rowIndex} data={{tableName:this.props.data.tableName,
                                                         viewRow: row,
                                                         height:this.props.data.cardHeight,
                                                         width:this.props.data.cardWidth,
                                                        }}></CardComponent>
                                                        </div>
                    
                ))}
                
            </div>
        );
}

}