import React from 'react';
import { Carousel, Row, Col, Container, ListGroup } from 'react-bootstrap';

const CarouselTemplate = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <Carousel fade interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://photos.zillowstatic.com/fp/8cfdd62e0c2e95b87b8a89d48e90eb43-cc_ft_960.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ap.rdcpix.com/ce4305635b3d44aef2e6abe0ce8f1f93l-m507177317od-w1024_h768_x2.webp"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ap.rdcpix.com/ce4305635b3d44aef2e6abe0ce8f1f93l-m1955241116od-w1024_h768.webp"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </Col>

        <Col>
          <ListGroup>
            <ListGroup.Item>Sales name: </ListGroup.Item>
            <ListGroup.Item>Description: </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

    </Container>
  );
};

export default CarouselTemplate;