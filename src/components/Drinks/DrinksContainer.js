import React, { Component } from "react";
import Drinks from "./Drinks";

class DrinksContainer extends Component {
  render() {
    const currentBarPrices = this.props.prices.filter(
      bar => bar.barId === this.props.currentBar[0].id
    );

    const drinks = currentBarPrices.map(bar => {
      return this.props.drinks.map(drink => {
        if (drink.id === bar.productId) {
          const { name, image } = drink;
          const { price } = bar;
          return { name, image, price };
        }
      });
    });

    const availableDrinks = drinks.map(i => i.filter(d => d));

    return (
      <div>
        <Drinks drinks={availableDrinks} addDrink={this.props.addDrink} />
      </div>
    );
  }
}

export default DrinksContainer;
