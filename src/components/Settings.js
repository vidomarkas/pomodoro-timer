import React from "react";
import SetTime from "./SetTime";

const Settings = props => {
  if (props.settingsOpen) {
    return (
      <div className="settings">
        <SetTime
          session={props.session}
          rest={props.rest}
          changeSessionLength={props.changeSessionLength}
          changeRestLength={props.changeRestLength}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Settings;
