import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Card, ListGroup } from 'react-bootstrap';

import { CardHolder } from '../styled/CardHolder';
import { CardImg } from '../styled/CardImg-styled';
import { CardProps } from '../types';

const CardTemplate: FC<CardProps> = ({ card }) => {
    const history = useHistory();

    return (
        <CardHolder>
            <Card onClick={() => history.push('/house/' + card.id)}>
                <CardImg src={card.img} alt="house" />
                <Card.Body>
                    <Card.Title>{card.name_house}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <ListGroup.Item>Price: {card.price}</ListGroup.Item>
                    <ListGroup.Item>Address: {card.address}</ListGroup.Item>
                </Card.Body>
            </Card>
        </CardHolder>
    );
};

export default CardTemplate;
