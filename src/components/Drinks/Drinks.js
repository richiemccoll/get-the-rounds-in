import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-between;

  li {
    margin-bottom: 1em;
  }
`;

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
  addDrink: PropTypes.func,
  drinks: PropTypes.array
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
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  addDrink: PropTypes.func
};
