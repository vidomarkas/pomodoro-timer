import React from "react";

const Controlls = props => {
  const { running } = props.state;

  if (running) {
    return (
      <div className="controlls">
        <button onClick={props.pause}>Pause</button>
        <button onClick={props.reset}>Reset</button>
      </div>
    );
  } else if (props.timerId !== null) {
    return (
      <div className="controlls">
        <button onClick={props.resume}>Resume</button>
        <button onClick={props.reset}>Reset</button>
      </div>
    );
  } else {
    return (
      <div className="controlls">
        <button onClick={props.start}>Start</button>
        <button onClick={props.reset}>Reset</button>
      </div>
    );
  }
};

export default Controlls;
