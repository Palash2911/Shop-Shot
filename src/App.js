import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import AllCat from './Components/AllCat'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/AllCat" element={<AllCat/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
