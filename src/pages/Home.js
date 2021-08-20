import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardTemplate from '../components/index'
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../redux/module/reducer';


const Home = () => {
    const houses = useSelector((state) => state.houses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHouses());
    }, []);

    return (
        <Container>
            <Row xs={1} sm={2} md={3} lg={3}>
                {
                    houses.map((house) =>
                        <Col key={house.id} className="mb-5">
                            <CardTemplate card={house} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Home;