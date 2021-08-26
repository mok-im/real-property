import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import { CardTemplate } from '../components/index';

import { fetchHouses } from '../redux/ducks/houseReducer';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Home = () => {
    const houses = useTypedSelector((state) => state.property.houses);
    const loading = useTypedSelector((state) => state.property.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHouses());
    }, [dispatch]);

    return (
        <Container>
            {loading ? (
                <Row className="vh-100 align-items-center">
                    <Spinner
                        animation="border"
                        className="mx-auto align-items-center"
                    />
                </Row>
            ) : (
                <Row xs={1} sm={2} md={3} lg={3}>
                    {houses.map((house) => (
                        <Col key={house.id} className="mb-5">
                            <CardTemplate card={house} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Home;
