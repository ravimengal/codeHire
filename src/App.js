import './App.css';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Navv from './Components/Home/Nav';
import { About} from './Components/Home/About';
import Signup from "./Components/Signup/Signup"

function App() {
  return (
    <div>
       
        <Router>
        <Navv/>

        <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>

        </Routes>
        </Router>


    </div>
  );
}

export default App;
