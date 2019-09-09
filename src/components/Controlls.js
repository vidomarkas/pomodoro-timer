import React from "react";

const Controlls = props => {
  return (
    <div className="controlls">
      <button onClick={props.start}>Start</button>
      <button onClick={props.pause}>Pause</button>
      <button onClick={props.reset}>Reset</button>
      {/* <button>Resume</button> */}
    </div>
  );
};

export default Controlls;
