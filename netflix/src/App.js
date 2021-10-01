import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Galleries from './components/Galleries'
import Container from 'react-bootstrap/Container'
import MyFooter from "./components/MyFooter"


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Galleries />
      </Container>
      <MyFooter />
    </div>
  );
}


export default App;
