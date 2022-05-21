import React, {useState} from "react";

const ResetAccount = () => {
  const username = "karthick kumar";

  // const [variableName, methodName] = useState(intialValue);
  const [studentName, setStudentName] = useState("Mr.William");

  const [formData, setFormData] = useState({
    username : "",
    password : ""
  });

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
          <input className="inputbox" type="password" placeholder="Pls enter password" onChange={ onHandleInput } name="password"/>
        </div>
        <button className="button" onClick={() => onReset()}>Reset</button>
        <br></br>
        <button onClick={() => updateStudentName()}>Update Student Name</button>
    </div>
  )
}

export default ResetAccount;