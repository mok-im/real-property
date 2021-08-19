import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardTemplate } from '../components/index';
import { useDispatch } from 'react-redux';
import { fetchHouses } from '../redux/ducks/actions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Home = () => {
    const houses = useTypedSelector((state) => state.houses);
    const load = useTypedSelector((state) => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHouses());
    }, [dispatch]);

    return (
        <Container>
            <Row xs={1} sm={2} md={3} lg={3}>
                {load ? (
                    <h1>Loading...</h1>
                ) : (
                    houses.map((house) => (
                        <Col key={house.id} className="mb-5">
                            <CardTemplate card={house} />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default Home;
