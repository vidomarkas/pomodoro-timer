import React from "react";

const ShowTime = props => {
  return (
    <div style={{ border: "2px solid #000", width: "60%", margin: "0 auto" }}>
      <h1>
        Time left: {Math.floor(props.renderTime() / 60)}:
        {Math.round(props.renderTime() % 60)}
      </h1>
    </div>
  );
};

export default ShowTime;
