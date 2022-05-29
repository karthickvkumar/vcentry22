import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const SentPage = () => {

  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email : "",
    password : ""
  })

  const onHandleInput = (event) => {
    setRegister({...register, [event.target.name] : event.target.value});
  }

  const submitRegister = () => {
    const url = "https://reqres.in/api/register";

    axios.post(url, register)
        .then((success) => {
          console.log(success);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        })

  }

  return (
    <div>
      <h1>This is a Sent Page</h1>
      <div className="space">
          <label className="lable">Enter your Email ID</label>
          <input className="inputbox" type="text" placeholder="Pls enter email id"  onChange={ onHandleInput } name="email"/>
        </div>
        <div className="space">
          <label className="lable">Enter your Password</label>
          <input className="inputbox" type="password" placeholder="Pls enter password" onChange={ onHandleInput } name="password"/>
        </div>
        <button onClick={() => submitRegister()}>Register</button>
    </div>
  );
};

export default SentPage;