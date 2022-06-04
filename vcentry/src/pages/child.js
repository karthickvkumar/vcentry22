import React from 'react';

const ChildComponent = (props) => {
  
  const onHandleInput = (event) => {
    // console.log(event.target.value);
    props.callbackAttributeName(event.target.value);
  }

  return (
    <div>
      <h1>This is a Child Component</h1>
      <p style={{fontSize : "20px"}}>{props.attributeName}</p>
      <div>
        <label>Enter your text:</label>
        <input type="text" placeholder="Enter any text.." onChange={onHandleInput}/>
      </div>
    </div>
  );
};

export default ChildComponent;