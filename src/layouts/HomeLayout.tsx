
import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";
import { Box, Grid, } from "@mui/material";

import { MyCardList } from "../components/Card";
import {AddNewCards } from "../components/mockData";
import Header from "../components/dashboard/Header";


const menuItems=[
    {title:"Overview", path:"/home"},
    {title:"Users", path:"/user"},
    {title:"Items", path:"/item"},
    {title:"Orders", path:"/order"},
    {title:"Payment", path:"/payment"},
    
    {title:"Create Post", path:"/post"},
    
]


export default class HomeLayout extends BaseComponent {
  
    constructor(props:BaseProps)
  {
    super(props);
    
  }
  override clickHandler(): void {
      //this.send({message:"hello", id: this.props.id});
  }
  // where you get message, data from other components.
  override onNotified(event:any) : void
    {
   
    }
  render () {

    
    return(
      
        <Box sx={{ flexGrow: 1, height: "100vh"}}>
        <Header id={"header"}></Header>
          
        <Grid container spacing={2}>
         
         <MyCardList id="testCard" data={{tableName:"cardsData", // tableName, should match to the table that you defined in app.
                                          syncers:[], 
                                          cardWidth:200,
                                          cardHeight:400,
                                          //Loading call back for lazy loading, it load 20 items each time,
                                          //You can use your number.
                                          loadData:()=>{return AddNewCards(20)}}}> Items</MyCardList>
        </Grid>
    </Box>
         


      
    )
  }  
} 