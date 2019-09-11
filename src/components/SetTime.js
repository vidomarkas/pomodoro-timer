import React from "react";

const SetTime = props => {
  const handleSessionChange = e => {
    props.changeSessionLength(e.target.value);
  };
  const handleRestChange = e => {
    props.changeRestLength(e.target.value);
  };
  return (
    <>
      <div className="settings__component">
        Session length
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          id="sessionSlider"
          onChange={handleSessionChange}
        />
        {props.session / 60}
      </div>
      <div className="settings__component">
        Break length
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          id="restSlider"
          onChange={handleRestChange}
        />
        {props.rest / 60}
      </div>
    </>
  );
};

export default SetTime;
