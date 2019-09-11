import React from "react";
import "../App.css";

const Controlls = props => {
  const { running } = props.state;

  if (running) {
    return (
      <div className="controlls">
        <button className="btn btn-pause" onClick={props.pause}>
          Pause
        </button>

        <button className="btn btn-reset" onClick={props.reset}>
          Reset
        </button>
      </div>
    );
  } else if (props.timerId !== null) {
    return (
      <div className="controlls">
        <button className="btn btn-resume" onClick={props.resume}>
          Resume
        </button>
        <button className="btn btn-reset" onClick={props.reset}>
          Reset
        </button>
      </div>
    );
  } else {
    return (
      <div className="controlls">
        <button onClick={props.start} className="btn btn-start">
          Start
        </button>
      </div>
    );
  }
};

export default Controlls;
