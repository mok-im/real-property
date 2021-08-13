import React from "react";
import { useHistory } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import styled from "styled-components";

const CardHolder = styled.div`
  transition: all 500ms ease;
  &:hover {
    box-shadow: 0px 12px 30px 1px rgba(34, 60, 80, 0.25);
    cursor: pointer;
    transform: translate(0, -5px);
  }
`;

const CardTemplate = ({ card }) => {
  const history = useHistory();

  return (
    <CardHolder>
      <Card onClick={() => history.push("/house/" + card.id)} className="">
        <img
          fluid
          style={{ height: "350px" }}
          src={card.img}
          className="d-block w-100"
          alt={card.id}
        />
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
