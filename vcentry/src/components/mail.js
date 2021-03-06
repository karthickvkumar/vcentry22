import React, {useState} from 'react';
import {Outlet, NavLink, useLocation} from "react-router-dom";

import { AppContext } from '../context/app-context';

const MailPage = () => {

  const location = useLocation();
  const [profile, setProfile] = useState({});

  const useremail = "karthick@gmail.com";

  const onRecivedUser = (user) => {
    setProfile(user);
  }

  return (
    <AppContext.Provider value={{ useremail, onRecivedUser, profile }}>
      <div className="wrapper">
        <div className="header">
          <h2>Welcome {location?.state?.username}</h2>
          <NavLink to="/">Back</NavLink>
        </div>
        <div className="container">
          <div className="sidebar">
            <NavLink to="/mail/inbox">Go to Inbox</NavLink>
            <br></br>
            <NavLink to="/mail/trash">Go to Trash</NavLink>
            <br></br>
            <NavLink to="/mail/sent">Go to Sent</NavLink>
            <br></br>
            <NavLink to="/mail/started">Go to Started</NavLink>
            <br></br>
            <NavLink to="/mail/parent">Go to Parent Page</NavLink>
            <br></br>
          </div>
          <div className="content">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default MailPage;