import React from "react";
class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      angka: 0,
    };
  }

  addAngka() {
    this.setState({
      angka: this.state.angka + 1,
    });

    console.log(this.state.angka);
  }
  render() {
    return (
      <div>
        <p>Result: {this.state.angka}</p>
        <button onClick={() => this.addAngka()}>Add</button>
      </div>
    );
  }
}

export default Counter;