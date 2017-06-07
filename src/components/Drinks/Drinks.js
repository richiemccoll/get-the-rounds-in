import React from "react";
import { Card, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Wrapper, Image } from './CustomUI';

class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.addDrink = this.addDrink.bind(this);
  }

  addDrink(drink, price) {
    this.props.addDrink(drink, price);
  }

  render() {
    const drinks = this.props.drinks.map((drink, index) => {
      return (
        <Drink
          key={index}
          name={drink[0].name}
          image={drink[0].image}
          price={drink[0].price}
          addDrink={this.addDrink}
        />
      );
    });

    return (
      <Wrapper>
        {drinks}
      </Wrapper>
    );
  }
}

Drinks.PropTypes = {
  addDrink: PropTypes.func.isRequired,
  drinks: PropTypes.array.isRequired
};

const Drink = ({ name, image, price, addDrink }) => {
  return (
    <li>
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Description>
            £{price.toFixed(2)}
          </Card.Description>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button onClick={e => addDrink(name, price)} basic color="green">
                Add To Order
              </Button>
            </div>
          </Card.Content>
        </Card.Content>
      </Card>
    </li>
  );
};

export default Drinks;

Drink.PropTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addDrink: PropTypes.func.isRequired
};
