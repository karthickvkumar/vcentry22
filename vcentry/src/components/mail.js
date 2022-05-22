import React from 'react';
import {Outlet, NavLink} from "react-router-dom";

const MailPage = () => {
  return (
    <div className="wrapper">
      <div className="header"></div>
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
        </div>
        <div className="content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MailPage;