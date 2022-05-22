import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImageContent = () => {
  return (
    <div>
      <h1>Image Content</h1>
      <img src={require("../images/shinchu.jpg")} alt="" className="img"/>
      <img src="https://www.focus2move.com/wp-content/uploads/2021/02/Bugatti-Divo_Lady_Bug-2020-1024-0b.jpg" alt="" className="img" />
      {/* <FontAwesomeIcon icon="fa-solid fa-user-alien" /> */}
      <h2>If Condition (Inline - If)</h2>
      {false && <h1>I can see you!</h1>}

      <h2>If Else Condition (Inline - If Else)</h2>
      { true ? <div>
                  <h1>Success</h1>
                  <h2>Continue</h2>
                </div> 
                : 
                <div>
                  <h1>Failure</h1>
                  <h2>Block</h2>
                </div> }
    </div>
  );
};

export default ImageContent;