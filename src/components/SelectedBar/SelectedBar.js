import React from "react";
import { Card, Image } from "semantic-ui-react";

const SelectedBar = ({ name, image, address, description }) => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Description>
        {address}
      </Card.Description>
      <Card.Content extra>
        {description}
      </Card.Content>
    </Card.Content>
  </Card>
);

export default SelectedBar;
