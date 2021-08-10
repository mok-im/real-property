import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row, Container, ListGroup } from 'react-bootstrap';
import axios from 'axios'
import './index.scss'

const CardTemplate = () => {

  const [stateCard, setCard] = useState([])

  useEffect(() => {
    try {
      axios.get('https://demo0371965.mockable.io/test').then(res => {
        setCard(res.data)
      });
    } catch (err) {
      throw new Error(err)
    }
  }, [])

  const renderCard = stateCard.map((card) =>
    <Col >
      <Card
        style={{ width: '18rem' }}
        className="cardholder col-sm-4 mb-4"
        key={card.id}
      >
        <Card.Img variant="top" src={card.img} />
        <Card.Body>
          <Card.Title>{card.name_house}</Card.Title>
          <Card.Text>
            {card.description}
          </Card.Text>
          <ListGroup.Item>Price: {card.price}</ListGroup.Item>
          <ListGroup.Item>Address: {card.address}</ListGroup.Item>
          <Button className="mt-2" variant="primary">Learn more..</Button>
        </Card.Body>
      </Card>
    </Col>

  )

  return (
    <Container >
      <Row>
        {renderCard}
      </Row>
    </Container>
  );
};

export default CardTemplate