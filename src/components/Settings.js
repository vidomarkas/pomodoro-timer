import React from "react";
import SetTime from "./SetTime";

const Settings = props => {
  if (props.settingsOpen) {
    return (
      <div className="settingsOpen">
        <SetTime
          session={props.session}
          rest={props.rest}
          increaseTimeRest={props.increaseTimeRest}
          increaseTimeSession={props.increaseTimeSession}
          decreaseTimeRest={props.decreaseTimeSession}
          decreaseTimeSession={props.decreaseTimeSession}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Settings;
