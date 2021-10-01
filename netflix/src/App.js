import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Galleries from './components/Galleries'
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Galleries />
      </Container>
    </div>
  );
}

export default App;
