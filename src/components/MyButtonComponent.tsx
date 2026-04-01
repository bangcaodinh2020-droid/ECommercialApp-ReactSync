
import { Component, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Button } from "@mui/material";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import BaseComponent from "@bangcao2020/reactsync";
import type {BaseProps} from "@bangcao2020/reactsync";
export const MessageType={
    addMoreRow:"addMoreRow",
    deleteARow:"deleteARow",
    count: "count"

}

export class ButtonLinkComponent extends BaseComponent {
  
  constructor(props:BaseProps)
  {
    super(props);
    
  }
  override clickHandler(): void {
      this.send({message:"hello", receiverId: this.props.data.receiverId ,senderId: this.props.id}); 
  }
  render () {
  
    return(
        
        <Button onClick={()=>{}} component={Link}
         to={this.props.data.to}>
          {this.props.children }
        </Button>
      
    )
  }  
} 




           


