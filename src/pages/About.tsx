import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Carousel, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchOneHouse } from '../redux/ducks/actions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IParams, IImg } from '../types';
import { ImgHolder } from '../styled/ImgHolder';

const About: React.FC = () => {
    const houses = useTypedSelector((state) => state.house);
    const load = useTypedSelector((state) => state.loading);
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneHouse(+id));
    }, [dispatch, id]);

    return (
        <Container>
            <NavLink className="btn btn-primary mb-4" to={'/'}>
                &larr; Back
            </NavLink>
            {load ? (
                <h1>Loading...</h1>
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
