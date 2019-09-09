import React, { Component } from "react";
import "./App.css";
import ShowTime from "./components/ShowTime";
import Controlls from "./components/Controlls";
import SetTime from "./components/SetTime";

class App extends Component {
  state = {
    initialSessionTime: 1500,
    initialRestTime: 300,
    sessionTime: 1500,
    restTime: 300,

    inSession: true,
    inRest: false,
    running: false
  };

  increaseTimeSession = () => {
    this.setState({ initialSessionTime: this.state.initialSessionTime + 60 });
  };
  decreaseTimeSession = () => {
    this.setState({ initialSessionTime: this.state.initialSessionTime - 60 });
  };
  increaseTimeRest = () => {
    this.setState({ initialRestTime: this.state.initialRestTime + 60 });
  };
  decreaseTimeRest = () => {
    this.setState({ initialRestTime: this.state.initialRestTime - 60 });
  };

  start = () => {
    this.setState({ running: true });
    if (this.state.inSession) {
      let duration = this.state.sessionTime;

      setInterval(() => {
        if (this.state.running) {
          duration = duration - 1;
          this.setState({ sessionTime: duration });
        }
      }, 1000);
    } else if (this.state.inRest) {
      let duration = this.state.restTime;

      setInterval(() => {
        if (this.state.running) {
          duration = duration - 1;
          this.setState({ restTime: duration });
        }
      }, 1000);
    }

    console.log(this.state);
  };

  pause = () => {
    console.log("pause");
    this.setState({ running: false });
  };

  reset = () => {
    console.log("reset");
    this.setState(
      state => ({
        running: false,
        inSession: true,
        inRest: false,
        sessionTime: state.initialSessionTime,
        restTime: state.initialRestTime
      }),
      console.log(this.state)
    );
  };

  renderTime = () => {
    if (this.state.inSession) {
      return this.state.sessionTime;
    } else if (this.state.inRest) {
      return this.state.restTime;
    }
  };
  render() {
    return (
      <div className="App">
        <ShowTime renderTime={this.renderTime} />
        <Controlls start={this.start} pause={this.pause} reset={this.reset} />
        <SetTime
          session={this.state.initialSessionTime}
          rest={this.state.initialRestTime}
          increaseTimeRest={this.increaseTimeRest}
          increaseTimeSession={this.increaseTimeSession}
          decreaseTimeRest={this.decreaseTimeRest}
          decreaseTimeSession={this.decreaseTimeSession}
        />
      </div>
    );
  }
}

export default App;
