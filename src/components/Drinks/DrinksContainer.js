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

    const currentBarDrinks = currentBarPrices.map(bar => {
      return drinks.map(drink => {
        if (drink.id === bar.productId) {
          const { name, image } = drink;
          const { price } = bar;
          return { name, image, price };
        }
      });
    });

    const availableDrinks = currentBarDrinks.map(i => i.filter(d => d));

    return (
      <div>
        <Header as="h2" textAlign="center">Available drinks</Header>
        <Drinks drinks={availableDrinks} addDrink={addDrink} />
      </div>
    );
  }
}

export default DrinksContainer;

DrinksContainer.PropTypes = {
  prices: PropTypes.array.isRequired,
  drinks: PropTypes.array.isRequired,
  addDrink: PropTypes.func.isRequired
};
