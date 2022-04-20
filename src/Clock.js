import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
    console.log(`constructor(pops)`);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);

    console.log(`mounting lifeCycle: componentDidMount`);
  }

  componentDidUpdate() {
    console.log(`updation lifeCycle: componentDidUpdate`);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log(`unmounting lifeCycle: componentWillUnmount`);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  render() {
    return (
      <div className="clock">
        <h4>
          Time: {this.state.date.toLocaleTimeString()}
          <span onClick={this.props.toggleClockMethod}>X</span>
        </h4>
      </div>
    );
  }
}

export default Clock;
