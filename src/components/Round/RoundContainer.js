import React, { Component } from "react";

class RoundContainer extends Component {
  render() {
    const prices = this.props.round.map(i => i.price);
    const total = prices.reduce((total, acc) => total + acc);

    return (
        <div>
            <h1>Current Round Total: £{total.toFixed(2)}</h1>
        </div>
    );
  }
}

export default RoundContainer;
