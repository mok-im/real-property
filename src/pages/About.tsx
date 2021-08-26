import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
    Carousel,
    Container,
    Row,
    Col,
    ListGroup,
    Spinner,
} from 'react-bootstrap';

import { ImgHolder } from '../styled/ImgHolder';
import { fetchOneHouse } from '../redux/ducks/houseReducer';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IParams, IImg } from '../types';

const About: React.FC = () => {
    const houses = useTypedSelector((state) => state.property.house);
    const loading = useTypedSelector((state) => state.property.loading);
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneHouse(Number(id)));
    }, [dispatch, id]);

    return (
        <Container>
            <NavLink className="btn btn-primary mb-4" to={'/'}>
                &larr; Back
            </NavLink>
            {!loading ? (
                <Row className="vh-100 align-items-center">
                    <Spinner
                        animation="border"
                        className="mx-auto align-items-center"
                    />
                </Row>
            ) : (
                houses.map((house, i) => (
                    <Row xs={1} sm={1} md={2} key={i}>
                        <Col>
                            <Carousel fade interval={null}>
                                {house.img_collection.map(
                                    (img: IImg, index: string) => (
                                        <Carousel.Item key={index}>
                                            <ImgHolder>
                                                <img
                                                    className="d-block w-100"
                                                    src={img.img}
                                                    alt="house"
                                                />
                                            </ImgHolder>
                                        </Carousel.Item>
                                    )
                                )}
                            </Carousel>
                        </Col>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item>
                                    Sales name: {house.sales_name}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Name House: {house.name_house}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: {house.price}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Address: {house.address}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {house.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                ))
            )}
        </Container>
    );
};

export default About;
