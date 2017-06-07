import React from "react";
import { Divider, Header, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const Round = ({ round, total, removeDrink, confirm }) => {
  return (
    <div>
      <Divider />
      <Header as="h3">Current Round Total: £{total.toFixed(2)}</Header>
      {round.map((i, index) => (
        <Header as="h4" key={index}>
          {i.drink}
          <i
            onClick={() => removeDrink(index)}
            className="remove circle icon"
          />
        </Header>
      ))}
      <Button onClick={confirm}>Confirm Round</Button>
      <Divider />
    </div>
  );
};

export default Round;

Round.PropTypes = {
  round: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  removeDrink: PropTypes.func.isRequired
};
