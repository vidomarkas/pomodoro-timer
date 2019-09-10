import React from "react";

const ShowTime = props => {
  const minTwoDigits = seconds => {
    return (seconds < 10 ? "0" : "") + seconds;
  };

  const calcTime = () => {
    const minutes = Math.floor(props.renderTime() / 60);
    const seconds = Math.round(props.renderTime() % 60);
    return (
      <h1>
        Time left: {minutes}:{minTwoDigits(seconds)}
      </h1>
    );
  };

  return (
    <div style={{ border: "2px solid #000", width: "60%", margin: "0 auto" }}>
      {calcTime()}
    </div>
  );
};

export default ShowTime;
