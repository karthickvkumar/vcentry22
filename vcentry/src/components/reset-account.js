import React from "react";

const ResetAccount = () => {
  return(
    <div>
      <h1>This is Reset Account</h1>
      <div className="space">
          <label className="lable">Enter your Username</label>
          <input className="inputbox" type="text" placeholder="Pls enter username"/>
        </div>
        <div className="space">
          <label className="lable">Enter your Password</label>
          <input className="inputbox" type="password" placeholder="Pls enter password"/>
        </div>
        <button className="button">Reset</button>
    </div>
  )
}

export default ResetAccount;