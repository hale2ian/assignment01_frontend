import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import Program from "./components/Program";
import Course from "./components/Course";

function App() {
  return (
    <div className="App">
        <TopBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Course" element={<Course/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Program" element={<Program/>}/>
        </Routes>
    </div>
  );
}

export default App;
