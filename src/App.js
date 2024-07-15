import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
        <TopBar/>
        <button className={"btn btn-primary"}>Submit</button>
    </div>
  );
}

export default App;
