import React from 'react';
import {useNavigate, NavLink} from "react-router-dom";

const LandingContent = () => {
  
  const navigate = useNavigate();
  
  const onLogin = () => {
    navigate("/login");
  }

  return (
    <div>
      <h1>Welcome to React Application</h1>
      <button onClick={() => onLogin()}>Login</button>
      <br></br>
      <NavLink to="/mail">Click to go Mail Page</NavLink>
      <br></br>
      <NavLink to="/register">Click to go Register Page</NavLink>
    </div>
  );
};

export default LandingContent;