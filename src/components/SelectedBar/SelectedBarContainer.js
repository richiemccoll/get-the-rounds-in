import React, { Component } from "react";
import SelectedBar from "./SelectedBar";
import PropTypes from "prop-types";

class SelectedBarContainer extends Component {
  render() {
    const { currentBar } = this.props;

    return (
      <SelectedBar
        name={currentBar[0].name}
        address={currentBar[0].address}
        image={currentBar[0].image_url}
        description={currentBar[0].description}
      />
    );
  }
}

export default SelectedBarContainer;

SelectedBarContainer.PropTypes = {
  currentBar: PropTypes.array
};
