import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Info from "./pages/info";
import User from "./pages/user";
import Login from "./pages/login";
import SignUp from "./pages/signup";

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