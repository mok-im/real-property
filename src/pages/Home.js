import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardTemplate from '../components/CardTemplate/CardTemplate'

const Home = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col> <CardTemplate /> </Col>
      </Row>
    </Container>
  );
};

export default Home;