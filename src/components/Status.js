import React from "react";

const Status = props => {
  if (props.status) {
    if (props.inSession) {
      return (
        <div className="status__box">
          <h1 className="status">Working...</h1>{" "}
        </div>
      );
    } else if (props.inRest) {
      return (
        <div className="status__box">
          <h1 className="status">Resting...</h1>{" "}
        </div>
      );
    }
  } else if (props.paused) {
    return (
      <div className="status__box">
        <h1 className="status">Paused</h1>{" "}
      </div>
    );
  }
  return (
    <div className="status__box">
      <h1 className="status"> </h1>{" "}
    </div>
  );
};

export default Status;
