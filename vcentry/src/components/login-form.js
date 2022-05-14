import React, { Component } from "react";

class LoginAction extends Component {

  dispalyMessage(){
    alert("Hi this is the message..")
  }

  render(){
    return (
      <div>
        <h1>Login Page Action</h1>
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