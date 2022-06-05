import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

import { AppContext } from '../context/app-context';

const InboxPage = () => {

  const [userList, setUserList] = useState([]);
  const [loader, setLoader] = useState(true);

  const {useremail} = useContext(AppContext);

  useEffect(() => {
    loadUserProfile(1);
  }, []);

  const loadUserProfile = (pageNo) => {
    setLoader(true);
    const url = "https://reqres.in/api/users?page=" + pageNo;
    //method chaining
    axios.get(url)
          .then((success) => {
            //succes code
            let response = success.data;
            // console.log(response.data);
            setUserList(response.data);
            setLoader(false);
          })
          .catch((error) => {
            //failure code
            console.log(error);
            setLoader(false);
          })
  }

  const onRemoveUser = (userId) => {
    const url = "https://reqres.in/api/users/"+userId;

    axios.delete(url)
        .then((success) => {
          console.log(success)
        })
        .catch((error) => {
          console.log(error)
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
        <td>
          <button onClick={() => onRemoveUser(value.id)}>Remove</button>
        </td>
      </tr>
    )
  })

  return (
    <div className='inbox-content'>
      {loader &&  <div className='overlay'>
        <img src={require("../images/spinner.gif")} className="loader"/>
      </div>}
      <h1>This is a Inbox Page {useremail}</h1>
      <button onClick={() => loadUserProfile()}>Load User Profile</button>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Profile Picture</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            profiles.length == 0 ?
              <tr>
                <td colSpan={5}>
                  No Record Found
                </td>
              </tr>
              :
              profiles
          }
        </tbody>
      </table>
      <div>
        <button onClick={() => loadUserProfile(1)}>1</button>
        <button onClick={() => loadUserProfile(2)}>2</button>
        <button onClick={() => loadUserProfile(3)}>3</button>
      </div>
    </div>
  );
};

export default InboxPage;