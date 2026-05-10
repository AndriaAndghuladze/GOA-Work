import React from "react";

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    
    if (this.state.count === 5) {
      throw new Error("Counter crashed!");
    }

    return (
      <div>
        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.handleClick}>
          Increment
        </button>
      </div>
    );
  }
}

export default BuggyCounter;