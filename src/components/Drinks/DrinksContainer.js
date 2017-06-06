import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import Drinks from "./Drinks";
import PropTypes from "prop-types";

class DrinksContainer extends Component {
  render() {
    const { drinks, prices, currentBar, addDrink } = this.props;

    const currentBarPrices = prices.filter(
      bar => bar.barId === currentBar[0].id
    );

    const currentBardrinks = currentBarPrices.map(bar => {
      return drinks.map(drink => {
        if (drink.id === bar.productId) {
          const { name, image } = drink;
          const { price } = bar;
          return { name, image, price };
        }
      });
    });

    const availableDrinks = currentBardrinks.map(i => i.filter(d => d));

    return (
      <div className="row">
        <Header as="h2">Available drinks</Header>
        <Drinks drinks={availableDrinks} addDrink={addDrink} />
      </div>
    );
  }
}

export default DrinksContainer;

DrinksContainer.PropTypes = {
  prices: PropTypes.array,
  drinks: PropTypes.array,
  addDrink: PropTypes.func
};
