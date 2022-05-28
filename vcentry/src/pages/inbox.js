import React from 'react';
import axios from 'axios';

const InboxPage = () => {

  const loadUserProfile = () => {
    const url = "https://reqres.in/api/users?page=2";
    //method chaining
    axios.get(url)
          .then((success) => {
            //succes code
            let response = success.data;
            console.log(response);
          })
          .catch((error) => {
            //failure code
            console.log(error);
          })
  }

  return (
    <div>
      <h1>This is a Inbox Page</h1>
      <button onClick={() => loadUserProfile()}>Load User Profile</button>
    </div>
  );
};

export default InboxPage;