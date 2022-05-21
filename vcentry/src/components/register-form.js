import React, {useState} from "react";

const RegisterForm = () => {

  const [register, setRegister] = useState({
    first_name : "",
    last_name : "",
    password: "",
    date_of_birth : "",
    gender: "",
    languages: [],
    address : "",
    city: ""
  })

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name);
    if(event.target.name === "languages"){
      if(event.target.checked){
        register.languages.push(event.target.value);
      }
      else{
        const index = register.languages.findIndex((value) => {
          return value === event.target.value;
        });
        register.languages.splice(index, 1);
      }

      setRegister({...register, languages : register.languages});
    }
    else{
      setRegister({...register, [event.target.name] : event.target.value});
    }
  }

  const onCreateAccount = () => {
    console.log(register);
  }

  return(
    <div>
      <h1>Register Form</h1>
      <div className="space">
        <label className="lable">Enter your First Name</label>
        <input className="inputbox" type="text" placeholder="Pls enter first name" onChange={onHandleInput} name="first_name"/>
      </div>
      <div className="space">
        <label className="lable">Enter your Last Name</label>
        <input className="inputbox" type="text" placeholder="Pls enter last name" onChange={onHandleInput} name="last_name"/>
      </div>
      <div className="space">
        <label className="lable">Enter your Password</label>
        <input className="inputbox" type="password" placeholder="Pls enter password" onChange={onHandleInput} name="password"/>
      </div>
      <div className="space">
        <label className="lable">Select you Date of Birth</label>
        <input className="inputbox" type="date" onChange={onHandleInput} name="date_of_birth"/>
      </div>
      <div className="space">
        <label className="lable">Select you Gender</label>
        <input type="radio" onChange={onHandleInput} name="gender" value="male"/>Male
        <input type="radio" onChange={onHandleInput} name="gender" value="female"/>Female
        <input type="radio" onChange={onHandleInput} name="gender" value="others"/>Other
      </div>
      <div className="space">
        <label className="lable">Select you known Languages</label>
        <input type="checkbox" onChange={onHandleInput} name="languages" value="tamil"/>Tamil
        <input type="checkbox" onChange={onHandleInput} name="languages" value="english"/>English
        <input type="checkbox" onChange={onHandleInput} name="languages" value="hindi"/>Hindi
        <input type="checkbox" onChange={onHandleInput} name="languages" value="telugu"/>Telugu
        <input type="checkbox" onChange={onHandleInput} name="languages" value="french"/>French
      </div>
      <div className="space">
        <label className="lable">Enter you Address</label>
        <textarea className="inputbox" onChange={onHandleInput} name="address"></textarea>
      </div>
      <div className="space">
        <label className="lable">Select you City</label>
        <select className="inputbox" onChange={onHandleInput} name="city">
          <option>Please select any one city</option>
          <option>Chennai</option>
          <option>Madurai</option>
          <option>Trichy</option>
          <option>Erode</option>
        </select>
      </div>
      <button onClick={() => onCreateAccount()}>Create Account</button>
    </div>
  )
}

export default RegisterForm;