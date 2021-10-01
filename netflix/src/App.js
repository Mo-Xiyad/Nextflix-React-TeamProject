import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Galleries from "./components/Galleries";
import Navbarr from "./components/Navbarr";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Galleries />
    </div>
  );
}

export default App;
