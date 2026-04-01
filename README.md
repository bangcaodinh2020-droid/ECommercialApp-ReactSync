A BOILERPLATE FOR WEB APP + MOBILE APP WITH REACT - REACTSYNC.

# Introduction

This project is a demo application built with React and Vite, showcasing how to use ReactSync for efficient communication between components.

The main goal of this demo is to illustrate how ReactSync can simplify state sharing and interaction across different parts of an application without relying on complex state management solutions.

In addition, the project demonstrates how ReactSync can be applied to build a dynamic card list for an e-commerce website. The card list simulates common e-commerce features such as displaying products, handling updates, and synchronizing data between components in a clean and scalable way.

# Key Highlights

⚡ Built with React + Vite for fast development and performance
🔄 Uses ReactSync for component-to-component communication
🧩 Demonstrates decoupled and maintainable state management
🛒 Implements a simple e-commerce card list UI
📦 Scalable structure for real-world applications

This demo is intended for developers who want to explore lightweight alternatives for state synchronization in React applications and understand how to structure interactive UIs more effectively.

# Web build

- npm install
- npm run dev
- npm run build
- npm run preview

# Mobile Build (Android)

This project supports building a native Android application using Capacitor. Follow the steps below to set up and run the mobile app:

# Setup

npm install
npm install @capacitor/core @capacitor/cli
npx cap init

# Add Android Platform

npm install @capacitor/android
npx cap add android

# Build and Run

npm run build
npx cap sync
npx cap run android

# Notes

Make sure you have Android Studio installed and properly configured.
An emulator or a physical Android device is required to run the app.
After syncing, you can also open the project in Android Studio:
npx cap open android

This will allow you to debug and run the application directly from the Android development environment.

# Detail in code.

# STEP 1, we need define an app.

# app.tsx.

import {BaseApp} from "@bangcao2020/reactsync";

export default class App extends BaseApp {

render(){
return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/users" element={<User />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<Error />} />
    </Routes>

);
}
}

# STEP 2, Inject the app.

# main.tsx

ReactDOM.createRoot(document.getElementById("app")!).render(
<BrowserRouter>
<ThemeProvider theme={theme}>
<App id="appLayout" data={{ syncData:{
mode:"production",
menu:{master:"Ladies", nav:"New", category:"", isShowCategory:false},
cardsData:{rows:AddCard(50), columns: [], actions:[], currentMobileIndex:0},

                      }}}/>
    </ThemeProvider>

  </BrowserRouter>
);

# STEP 3, we need a home layout.

# HomeLayout.tsx

import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";
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

# STEP 4, we build a header section.

# Header.tsx

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

# STEP 7, Card List - where you display your products.

# Card.tsx

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

<div id={"card\_"+ this.id} style={{width:this.props.data.width, height:this.props.data.height}}>
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

# TODO, add shop card feature, each time user choose an item.

# NOTE:

# In this demo, you can see how we build complicated menu and how to use card list to work

# with data in format of a table.

# SCREENSHOTS

![Web](./screenshot/test1.jpg)
![Mobile](./screenshot/test2.jpg)
![Mobile](./screenshot/test3.jpg)
![Mobile](./screenshot/test4.jpg)
