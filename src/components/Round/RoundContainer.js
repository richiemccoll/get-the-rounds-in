import React, { Component } from "react";
import { Confirm } from "semantic-ui-react";
import PropTypes from "prop-types";
import Round from "./Round";

class RoundContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      open: false, 
      result: "show the modal to capture a result" 
    };

    this.removeDrink = this.removeDrink.bind(this);
    this.show = this.show.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  removeDrink(item) {
    this.props.removeDrink(item);
  }

  show() {
    this.setState({ open: true });
  }

  handleConfirm() {
    // this.props.confirmRound(this.props.round);
    this.props.clearRound(this.props.round);

    this.setState({ result: "confirmed", open: false });
  }

  handleCancel() {
    this.setState({ result: "cancelled", open: false });
  }

  render() {
    const prices = this.props.round.map(i => i.price);
    const total = prices.reduce((total, acc) => total + acc);

    return (
      <div>
        <Round
          total={total}
          round={this.props.round}
          removeDrink={this.removeDrink}
          confirm={this.show}
        />
        <Confirm
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}

export default RoundContainer;

RoundContainer.PropTypes = {
  round: PropTypes.array.isRequired,
  removeDrink: PropTypes.func.isRequired
};
