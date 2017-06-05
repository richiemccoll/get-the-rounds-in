import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

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
      <div>
        {drinks}
      </div>
    );
  }
}

const Drink = ({ name, image, price, addDrink }) => {
  return (
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
            <Button
              onClick={e => addDrink(name, price)}
              basic
              color="green"
            >
              Add To Order
            </Button>
          </div>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

export default Drinks;
