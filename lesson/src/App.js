import "./App.css";
import { Header } from "./Components/Header/Header";
import { Section } from "./Components/Section/Section";
function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Section data={props.data}/>
      </div>
    </div>
  );
}

export default App;
