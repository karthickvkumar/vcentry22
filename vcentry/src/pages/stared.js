import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AppContext } from '../context/app-context';
import { useDispatch } from 'react-redux';
import { sendUserResult } from '../redux/action/app-action';

const StaredPage = () => {

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name : "",
    job : ""
  });

  const {useremail, profile} = useContext(AppContext);

  const onHandleInput = (event) => {
    setUser({...user, [event.target.name] : event.target.value});
  }

  const submitUser = () => {
    const url = "https://reqres.in/api/users/2";

    axios.put(url, user)
        .then((success) => {
          const response = success.data;
          dispatch(sendUserResult(response));
          alert("Profile Added")
        })
        .catch((error) => {
          console.log(error);
          
        })

  }

  return (
    <div>
      <h1>This is a Started Page {useremail}</h1>
      <div className="space">
          <label className="lable">Enter your Name</label>
          <input className="inputbox" type="text" placeholder="Pls enter name"  onChange={ onHandleInput } name="name"/>
        </div>
        <div className="space">
          <label className="lable">Enter your Job</label>
          <input className="inputbox" type="text" placeholder="Pls enter job" onChange={ onHandleInput } name="job"/>
        </div>
        <button onClick={() => submitUser()}>Submit User</button>
        <div>
          <h1>{profile.first_name} {profile.last_name}</h1>
          <img src={profile.avatar} />
        </div>
    </div>
  );
};

export default StaredPage;