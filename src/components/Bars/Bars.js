import React from "react";
import { Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";

const Bars = ({ bars, selectBar }) => {
  return (
    <div>
        <Dropdown
          placeholder="Select bar.."
          fluid
          selection
          search
          options={bars}
          onChange={selectBar}
        />
    </div>
  );
};

export default Bars;

Bars.PropTypes = {
  bars: PropTypes.array.isRequired,
  selectBar: PropTypes.func.isRequired
};
