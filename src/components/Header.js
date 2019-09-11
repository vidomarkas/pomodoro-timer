import React from "react";
import clock from "../assets/clock.svg";
import settings from "../assets/controls.svg";

function Header(props) {
  return (
    <div className="header">
      <img src={clock} alt="timer" />
      <img src={settings} alt="settings" onClick={props.settingsHandler} />
    </div>
  );
}

export default Header;
