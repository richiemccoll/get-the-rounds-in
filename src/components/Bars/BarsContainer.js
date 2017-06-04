import React, { Component } from "react";
import Bars from "./Bars";
import PropTypes from "prop-types";

class BarsContainer extends Component {
  constructor(props) {
    super(props);
    this.selectBar = this.selectBar.bind(this);
  }

  selectBar(event, data) {
    event.preventDefault();
    this.props.selectBar(data.options[data.value])
  }

  render() {
    const bars = this.props.bars.map(bar => {
      const { text, value } = bar;
      return { text, value }
    });

    return (
      <div>
        <Bars bars={bars} selectBar={this.selectBar} />
      </div>
    );
  }
}

export default BarsContainer;

BarsContainer.PropTypes = {
  selectBar: PropTypes.func,
  bars: PropTypes.array
};
