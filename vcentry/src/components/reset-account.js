import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const ResetAccount = () => {
  const username = "karthick kumar";

  const navigate = useNavigate();

  // const [variableName, methodName] = useState(intialValue);
  const [studentName, setStudentName] = useState("Mr.William");

  const [formData, setFormData] = useState({
    username : "",
    password : ""
  });

  const [passwordVisiblity, setPassowrdVisibility] = useState(true);

  const updateStudentName = () => {
    const value = prompt("Enter the student name");

    // To update a useState -> methodName(newValue);
    setStudentName(value);
  }

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name);
    setFormData({...formData, [event.target.name] :  event.target.value});
  }

  const onReset = () => {
    console.log(formData);

    navigate("/mail", {state: formData});
  }

  const controlPasswordVisibily = (status) => {
    setPassowrdVisibility(status);
  }

  return(
    <div>
      <h1>This is Reset Account {username}</h1>
      <h1>The student Name is {studentName}</h1>
      <div className="space">
          <label className="lable">Enter your Username</label>
          <input className="inputbox" type="text" placeholder="Pls enter username" onChange={ onHandleInput } name="username"/>
        </div>
        <div className="space">
          <label className="lable">Enter your Password</label>
          <input className="inputbox" type={passwordVisiblity ? "password" : "text"} placeholder="Pls enter password" onChange={ onHandleInput } name="password"/>

          {
            passwordVisiblity ? <img src={require("../images/close-eye.png")} className="eye-icon" onClick={() => controlPasswordVisibily(false)}/>
                : <img src={require("../images/open-eye.jpg")} className="eye-icon" onClick={() => controlPasswordVisibily(true)}/>
          }

        </div>
        <button className="button" onClick={() => onReset()}>Reset</button>
        <br></br>
        <button onClick={() => updateStudentName()}>Update Student Name</button>
    </div>
  )
}

export default ResetAccount;