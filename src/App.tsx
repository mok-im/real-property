import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import About from './pages/About';
import Home from './pages/Home';

const App: React.FC = (): JSX.Element => (
    <BrowserRouter>
        <Container className="bg-light">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/house/:id" component={About} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;
