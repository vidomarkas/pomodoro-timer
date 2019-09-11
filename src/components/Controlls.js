import React from "react";
import "../App.css";

const Controlls = props => {
  const { running } = props.state;

  if (running) {
    return (
      <div className="controlls">
        <div className="btn btn-pause" onClick={props.pause}>
          Pause
        </div>

        <div className="btn btn-reset" onClick={props.reset}>
          Reset
        </div>
      </div>
    );
  } else if (props.timerId !== null) {
    return (
      <div className="controlls">
        <div className="btn btn-resume" onClick={props.resume}>
          Resume
        </div>
        <div className="btn btn-reset" onClick={props.reset}>
          Reset
        </div>
      </div>
    );
  } else {
    return (
      <div className="controlls">
        <div onClick={props.start} className="btn btn-start">
          Start
        </div>
      </div>
    );
  }
};

export default Controlls;
