import React, {useState} from 'react';
import ChildComponent from './child';

const ParentComponent = () => {

  const [textMessage, setTextMessage] = useState("");

  const onHandleTextArea = (event) => {
    setTextMessage(event.target.value);
  }

  return (
    <div>
      <h1>This is a Parent Component</h1>
      <div>
        <label>Enter you Information :</label>
        <br></br>
        <textarea placeholder='type here...' className='textarea' onChange={onHandleTextArea}></textarea>
      </div>
      <ChildComponent attributeName={textMessage}></ChildComponent>
    </div>
  );
};

export default ParentComponent;