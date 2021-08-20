import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import About from './pages/About';
import Home from './pages/Home';


function App() {
    return (
        <BrowserRouter >
            <Container className="bg-light pt-5 pb-5 rounded">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/house/:id" component={About} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
