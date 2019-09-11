import React from "react";
import clock from "../assets/clock.svg";
import settings from "../assets/controls.svg";

function Header(props) {
  return (
    <div className="header">
      <img
        //!highlight icon when state.settingsOpen is true is not working
        className={`${
          props.settingsOpen
            ? "header__button"
            : "header__button header__button--selected"
        }`}
        //!----------------------------------------------------------------
        src={clock}
        alt="timer"
        onClick={props.showTimer}
      />
      <img
        //!highlight icon when state.settingsOpen is true is not working
        className={`${
          props.settingsOpen
            ? "header__button header__button--selected"
            : "header__button"
        }`}
        //!----------------------------------------------------------------
        src={settings}
        alt="settings"
        onClick={props.showSettings}
      />
    </div>
  );
}

export default Header;
