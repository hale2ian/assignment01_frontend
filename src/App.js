import './App.css';
import TopBar from "./components/TopBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import Program from "./components/Program";
import Course from "./components/Course";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
        <TopBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/course" element={<Course/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/program" element={<Program/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
