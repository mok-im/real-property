import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneHouse } from '../redux/module/reducer';
import styled from 'styled-components';

const ImgHolder = styled.div`
    height: 40rem;
    display: flex;
    align-items: center;
    background-color: #282828;
`;

const About = () => {
    const houses = useSelector((state) => state.houses);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneHouse(+id));
    }, []);


    const renderHouse = houses.map((house) =>
        <Row xs={1} sm={1} md={2}>
            <Col >
                <Carousel fade interval={null}>
                    {
                        house.img_collection.map((img) =>
                            <Carousel.Item>
                                <ImgHolder >
                                    <img
                                        fluid
                                        className="d-block w-100"
                                        src={img.img}
                                        alt={img.id}
                                    />
                                </ImgHolder>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
            </Col>
            <Col  >
                <ListGroup >
                    <ListGroup.Item>Sales name: {house.sales_name}  </ListGroup.Item>
                    <ListGroup.Item>Name House: {house.name_house}</ListGroup.Item>
                    <ListGroup.Item>Price: {house.price}</ListGroup.Item>
                    <ListGroup.Item>Address: {house.address}</ListGroup.Item>
                    <ListGroup.Item>Description: {house.description}</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    )

    return (
        <Container className="bg-light pt-2 pb-2 rounded">
            {renderHouse}
        </Container>
    );
};

export default About;