import React, {useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import ChildComponent from './child';

const ParentComponent = () => {

  const [textMessage, setTextMessage] = useState("");
  const [incomingMsg, setIncomingMsg] = useState("");

  const onHandleTextArea = (event) => {
    setTextMessage(event.target.value);
  }

  const callbackMethod = (text) => {
    setIncomingMsg(text);
  }

  return (
    <div>
      <h1>This is a Parent Component</h1>
      <div>
        <p>Incoming message -> {incomingMsg}</p>
      </div>
      <div>
        <label>Enter you Information :</label>
        <br></br>
        <textarea placeholder='type here...' className='textarea' onChange={onHandleTextArea}></textarea>
      </div>
      <ChildComponent attributeName={textMessage} callbackAttributeName={callbackMethod}></ChildComponent>
    </div>
  );
};

export default ParentComponent;