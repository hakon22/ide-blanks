import { Card as CardBootstrap, Button } from 'react-bootstrap';
import { ItemProps } from '../types/Item';

const Card = ({ item }: ItemProps) => {
  const {
    name, description, image, price,
  } = item;
  return (
    <CardBootstrap>
      <CardBootstrap.Img variant="top" src={image} />
      <CardBootstrap.Body>
        <CardBootstrap.Title>{name}</CardBootstrap.Title>
        <CardBootstrap.Text>
          {description}
        </CardBootstrap.Text>
        <CardBootstrap.Text>
          {price}
        </CardBootstrap.Text>
        <Button variant="primary">Купить</Button>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
};

export default Card;
