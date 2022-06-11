import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class LifeCycleComponent extends Component {

  constructor(){
    super();
    this.state = {
      message : "Hello Everyone.."
    }
    console.log("constructor - Initialization method")
  }
  
  UNSAFE_componentWillMount(){
    console.log("componentWillMount - Mounting method")
  }
  
  componentDidMount(){
    console.log("componentDidMount - Mounting method")
  }
  
  updateMessage(){
    this.setState({
      message : "Hello Everyone"
    })
  }
  
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextState, this.state);
    console.log("shouldComponentUpdate - Updating method")
    if(nextState.message == this.state.message){
      return false;
    }
    else{
      return true;
    }
  }
  
  UNSAFE_componentWillUpdate(){
    console.log("componentWillUpdate - Updating method")    
  }
  
  componentDidUpdate(){
    console.log("componentDidUpdate - Updating method")
  }
  
  componentWillUnmount(){
    console.log("componentWillUnmount - UnMounting method")
  }

  render() {
    console.log("render - Mounting method")
    return (
      <div>
        <h1>Life Cycle Component {this.state.message}</h1>
        <button onClick={() => this.updateMessage()}>Update Msg</button>
        <NavLink to="/">back</NavLink>
      </div>
    );
  }
}

export default LifeCycleComponent;