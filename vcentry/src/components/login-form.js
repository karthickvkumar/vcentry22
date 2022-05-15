import React, { Component } from "react";

class LoginAction extends Component {

  constructor(props){
    super(props);
    this.state = {
      message : "This is a state message",
      username : '',
      password : ''
    }
  }

  dispalyMessage(){
    this.setState({
      message : "Its updated to new state message value"
    })
  }

  onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name);
    /*if(event.target.name == "username"){
      this.setState({
        username : event.target.value
      })
    }
    else{
      this.setState({
        password : event.target.value
      })
    }*/

    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onLogin(){
    console.log(this.state)
  }

  render(){
    var name = "Karthick Kumar";

    return (
      <div>
        <h1>Login Page Action, {name}</h1>
        <h2>{this.state.message}</h2>
        <div className="space">
          <label className="lable">Enter your Username</label>
          <input className="inputbox" type="text" placeholder="Pls enter username"  onChange={ this.onHandleInput } name="username"/>
        </div>
        <div className="space">
          <label className="lable">Enter your Password</label>
          <input className="inputbox" type="password" placeholder="Pls enter password" onChange={ this.onHandleInput } name="password"/>
        </div>
        {/* <button onClick={() => this.dispalyMessage() } className="button">Login</button> */}
        <button onClick={() => this.onLogin() } className="button">Login</button>
      </div>
    )
  }
}

export default LoginAction;