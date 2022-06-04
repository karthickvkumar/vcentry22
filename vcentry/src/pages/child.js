import React from 'react';

const ChildComponent = (props) => {
    
  return (
    <div>
      <h1>This is a Child Component</h1>
      <p style={{fontSize : "20px"}}>{props.attributeName}</p>
    </div>
  );
};

export default ChildComponent;