//import { BaseComponent } from "../components/BaseComponent";
import BaseComponent, {ButtonComponent, 
  MessageType, 
  TestComponent, 
  TableComponent, 
  CounterComponent, 
  ViewRowComponent,
  PaginationComponent,
  CardComponent, CardList 
} from "@bangcao2020/reactsync";

import type {BaseProps} from "@bangcao2020/reactsync";
import MenuBar from "../components/dashboard/MenuBar";
import NavBar from "../components/dashboard/NavBar";
import { Box, Grid, } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import UserBar from "../components/dashboard/UserBar";
//import { CardComponent, CardList } from "../components/Card";
import { AddRow, AddCard, AddNewCards } from "../components/mockData";
//import TableComponent from "../components/dashboard/TableComponent";


const menuItems=[
    {title:"Overview", path:"/home"},
    {title:"Users", path:"/user"},
    {title:"Items", path:"/item"},
    {title:"Orders", path:"/order"},
    {title:"Payment", path:"/payment"},
    
    {title:"Create Post", path:"/post"},
    
]

const Item = styled(Paper)(({ theme }) => ({
  height:'100%',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const range = (start: number, end: number): number[]=>{
     const begin = (start >=0) ? start: 0;
     if(end <= begin)
        return [];
     return Array.from({ length: end - begin}, (_, i) => begin + i);
}


export default class MainDashboardLayout extends BaseComponent {
  state = {
    data:{
      count: 1,

    },
    row:range(0,1000),

   };
    constructor(props:BaseProps)
  {
    super(props);
    //this.setState({row: AddRow(20)});
  }
  override clickHandler(): void {
      //this.send({message:"hello", id: this.props.id});
  }

  override onNotified(event:any) : void
    {
   
    }
  render () {

    const {children } = this.props;
    return(
      

        <Box sx={{ flexGrow: 1, height: "100vh"}}>
        <Grid container spacing={2}>
        <Grid size={12}><Item><NavBar id="navBar" data={menuItems}></NavBar></Item></Grid>
      

        </Grid>
          
        <Grid container spacing={2}>
        
        <Grid size={{ xs: 0, sm:0, md: 2}} sx={{height: "100vh", display: { xs: 'none', md: 'block' }}}>
           <Item><MenuBar id="menuBar" data={menuItems}></MenuBar></Item>
        </Grid>
        <Grid size={{ xs: 12, sm:12, md: 10 }}>
         <Item>{children} 
          <a href="/user" style={{ textDecoration: "none", color: "inherit" }}>Logout</a>
           <TestComponent id="testText" data={{}}>Hello 
          </TestComponent>
            <CardList id="testCard" data={{tableName:"cardsData", 
                                          syncers:[], 
                                          cardWidth:200,
                                          cardHeight:400,
                                          loadData:()=>{return AddNewCards(20)}}}> CARD LIST</CardList>
          
          
          <ViewRowComponent id="viewRow1" data={{fromTableName:"tableData"}}>View Row Component</ViewRowComponent>

          <TableComponent id="testTable" data={{tableName:"tableData", tableTarget:"table2", syncers:["viewRow1", "viewRow2", "testTable2"]}}> My Table</TableComponent>
          
           {/* <PaginationComponent id={"pagination1"} data={{rowsPerPage:10, numOfPageNode:4, tableName:"tableData", syncers:["testTable"]}}></PaginationComponent>
            */}


           

           <ViewRowComponent id="viewRow2" data={{}}>View Row Component</ViewRowComponent>
          <TableComponent id="testTable2" data={{tableName:"table2", tableTarget:"tableData", syncers:["viewRow2", "viewRow1"]} }> Table 2</TableComponent> 
          {/* <PaginationComponent id={"pagination2"} data={{rowsPerPage:10, numOfPageNode:4, tableName:"table2", syncers:["testTable2"]}}></PaginationComponent>
            */}
          
          {/* {this.state.row.map((n, index) =>(
                  <CounterComponent id={"counterBtn" + index} data={{syncers:["counterBtn" + (index+1) , "counterBtn" + (index+2)]}}>Count</CounterComponent>
                
          ))} */}
           
           
          </Item>
        </Grid>
      </Grid>
    </Box>
         


      
    )
  }  
} 