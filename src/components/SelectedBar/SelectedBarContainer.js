import React, { Component } from "react";
import SelectedBar from './SelectedBar';

class SelectedBarContainer extends Component {
  render() {
    const { currentBar } = this.props;

    return (
      <div>
        <SelectedBar
          name={currentBar[0].name}
          address={currentBar[0].address}
          image={currentBar[0].image_url}
          description={currentBar[0].description}
        />

        <h2>Available drinks</h2>

      </div>
    );
  }
}

export default SelectedBarContainer;