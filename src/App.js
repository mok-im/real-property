import { Container } from 'react-bootstrap';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Container>
      <Navigation />
      <Home />
      <About />

    </Container>

  );
}

export default App;
