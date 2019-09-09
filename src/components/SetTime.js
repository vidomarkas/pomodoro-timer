import React from "react";

const SetTime = props => {
  return (
    <div>
      <div>
        {" "}
        Session: <button onClick={props.decreaseTimeSession}>-</button>{" "}
        {props.session / 60}{" "}
        <button onClick={props.increaseTimeSession}>+</button>
      </div>
      <div>
        {" "}
        Break: <button onClick={props.decreaseTimeRest}>-</button>{" "}
        {props.rest / 60} <button onClick={props.increaseTimeRest}>+</button>
      </div>
    </div>
  );
};

export default SetTime;
