import React from 'react';
import {useNavigate, NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';

const LandingContent = () => {

  const userProfiles = useSelector((state) => state.AppReducer.userList);
  console.log(userProfiles);

  const navigate = useNavigate();
  
  const onLogin = () => {
    navigate("/login");
  }

  const profiles = userProfiles.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.name}</td>
        <td>{value.job}</td>
        <td>{value.updatedAt}</td>
      </tr>
    )
  })

  return (
    <div>
      <h1>Welcome to React Application</h1>
      <button onClick={() => onLogin()}>Login</button>
      <br></br>
      <NavLink to="/mail">Click to go Mail Page</NavLink>
      <br></br>
      <NavLink to="/register">Click to go Register Page</NavLink>
      <br></br>
      <NavLink to="/reset">Click to go Reset Page</NavLink>
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {profiles}
        </tbody>
      </table>
    </div>
  );
};

export default LandingContent;