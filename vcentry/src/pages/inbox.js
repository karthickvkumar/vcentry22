import React, {useState} from 'react';
import axios from 'axios';

const InboxPage = () => {

  const [userList, setUserList] = useState([]);

  const loadUserProfile = () => {
    const url = "https://reqres.in/api/users?page=2";
    //method chaining
    axios.get(url)
          .then((success) => {
            //succes code
            let response = success.data;
            // console.log(response.data);
            setUserList(response.data);
          })
          .catch((error) => {
            //failure code
            console.log(error);
          })
  }

  const profiles = userList.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} alt="" width="50" />
        </td>
      </tr>
    )
  })

  return (
    <div>
      <h1>This is a Inbox Page</h1>
      <button onClick={() => loadUserProfile()}>Load User Profile</button>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Profile Picture</th>
          </tr>
        </thead>
        <tbody>
          {profiles}
        </tbody>
      </table>
    </div>
  );
};

export default InboxPage;