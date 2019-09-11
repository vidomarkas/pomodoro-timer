import React, { Component } from "react";
import "./App.css";
import Controlls from "./components/Controlls";
import soundfile from "./assets/sound.mp3";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import Status from "./components/Status";
import Header from "./components/Header";

class App extends Component {
  state = {
    initialSessionTime: 1500,
    initialRestTime: 300,
    sessionTime: 1500,
    restTime: 300,
    inSession: true,
    inRest: false,
    running: false,
    percentage: 0,
    activeTime: 0,
    paused: false,
    settingsOpen: false
  };

  start = () => {
    clearInterval(this.timerId);
    this.timerId = null;
    this.setState(
      {
        sessionTime: this.state.initialSessionTime,
        restTime: this.state.initialRestTime
      },

      () => {
        this.setState({ running: true });
        if (this.state.inSession) {
          let duration = this.state.sessionTime;
          this.timerId = setInterval(() => {
            if (this.state.running) {
              duration = duration - 1;
              this.setState({ sessionTime: duration });
              this.calcPercentage();
              if (duration <= 0) {
                this.playSound();
                clearInterval(this.timerId);
                this.toggleSession();
              }
            }
          }, 10);
        } else if (this.state.inRest) {
          let duration = this.state.restTime;

          this.timerId = setInterval(() => {
            if (this.state.running) {
              duration = duration - 1;
              this.setState({ restTime: duration });
              this.calcPercentage();
              if (duration <= 0) {
                this.playSound();
                clearInterval(this.timerId);

                this.toggleSession();
              }
            }
          }, 10);
        }
      }
    );
  };

  reset = () => {
    clearInterval(this.timerId);
    this.timerId = null;
    console.log("reset");
    this.setState({
      running: false,
      inSession: true,
      inRest: false,
      sessionTime: this.state.initialSessionTime,
      restTime: this.state.initialRestTime,
      percentage: 0,
      paused: false
    });
  };

  pause = () => {
    console.log("pause");
    this.setState({ running: false, paused: true });
  };
  resume = () => {
    console.log("resume");
    this.setState({ running: true, paused: false });
  };

  playSound = () => {
    const audio = new Audio(soundfile);
    audio.play();
  };

  toggleSession = () => {
    console.log("toggled");
    this.setState({
      inSession: !this.state.inSession,
      inRest: !this.state.inRest,
      percentage: 0
    });
    this.start();
  };

  detectActiveTime = () => {
    if (this.state.inSession) {
      this.setState({ activeTime: this.state.sessionTime });
    } else {
      this.setState({ activeTime: this.state.restTime });
    }
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

  renderTime = () => {
    if (this.state.inSession) {
      return this.state.sessionTime;
    } else if (this.state.inRest) {
      return this.state.restTime;
    }
  };

  calcPercentage = () => {
    let percentage;
    if (this.state.inSession) {
      percentage =
        100 - (this.state.sessionTime * 100) / this.state.initialSessionTime;

      this.setState({ percentage });
    } else {
      percentage =
        100 - (this.state.restTime * 100) / this.state.initialRestTime;

      this.setState({ percentage });
    }
  };

  settingsHandler = () => {
    this.setState(
      { settingsOpen: !this.state.settingsOpen },
      console.log("settingsOpen:", this.state.settingsOpen)
    );
  };

  componentDidMount() {
    this.reset();
  }

  render() {
    return (
      <>
        <div className="App">
          <Header settingsHandler={this.settingsHandler} />
          <Status
            status={this.state.running}
            inRest={this.state.running}
            inSession={this.state.inSession}
            paused={this.state.paused}
          />
          <Timer
            strokeWidth="10"
            sqSize="200"
            percentage={this.state.percentage}
            renderTime={this.renderTime}
          />

          <Controlls
            start={this.start}
            pause={this.pause}
            reset={this.reset}
            resume={this.resume}
            state={this.state}
            timerId={this.timerId}
          />
          <Settings
            open={this.state.settingsOpen}
            session={this.state.initialSessionTime}
            rest={this.state.initialRestTime}
            increaseTimeRest={this.increaseTimeRest}
            increaseTimeSession={this.increaseTimeSession}
            decreaseTimeRest={this.decreaseTimeRest}
            decreaseTimeSession={this.decreaseTimeSession}
            settingsSaved={this.settingsHandler}
          />
        </div>
      </>
    );
  }
}

export default App;
