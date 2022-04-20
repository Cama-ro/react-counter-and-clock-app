import React, { Component } from "react";
import "./Counter.css";
import ButtonsPanel from "./ButtonsPanel";
// import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: true,
    };
  }

  changeValue = (action) => {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === "add") {
        currentCounterValue += 1;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }

      return {
        counterValue: currentCounterValue,
      };
    });
  };

  toggleClock = () => {
    this.setState((prevState) => {
      return {
        showClock: !prevState.showClock,
      };
    });
  };

  render() {
    let clockElement = "";

    if (this.state.showClock) {
      // clockElement = <Clock toggleClockMethod={this.toggleClock} />;
      clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
    } else {
      clockElement = (
        <span onClick={this.toggleClock} className="show-clock">
          show clock
        </span>
      );
    }

    return (
      <div className="counter">
        Counter: <span className="value">{this.state.counterValue}</span>
        <ButtonsPanel buttonMethod={this.changeValue} />
        {clockElement}
      </div>
    );
  }
}

// function Counter(props) {
//   let randomNumber = Math.floor(Math.random() * 10000 + 1);

//   return (
//     <div className="counter">
//       <h2> Jestem hardcorem</h2>
//       Counter:
//       <span className="value">{props.initValue}</span>
//     </div>
//   );
// }

export default Counter;
