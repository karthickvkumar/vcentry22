import React, { Component } from "react";

class LoginAction extends Component {

  constructor(props){
    super(props);
    this.state = {
      message : "This is a state message"
    }
  }

  dispalyMessage(){
    this.setState({
      message : "Its updated to new state message value"
    })
  }

  render(){

    var name = "Karthick Kumar";

    return (
      <div>
        <h1>Login Page Action, {name}</h1>
        <h2>{this.state.message}</h2>
        <div className="space">
          <label className="lable">Enter your Username</label>
          <input className="inputbox" type="text" placeholder="Pls enter username" />
        </div>
        <div className="space">
          <label className="lable">Enter your Password</label>
          <input className="inputbox" type="password" placeholder="Pls enter password" />
        </div>
        <button onClick={() => this.dispalyMessage() } className="button">Login</button>
      </div>
    )
  }
}

export default LoginAction;