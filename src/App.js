import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Homefiles/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Cart from './Components/Cart'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Mens from './Components/Mens/Mens';
import Women from './Components/Women/Women';
import Electronics from './Components/Electronic/Electronics';
import Books from './Components/Books/Books';

function App() {

  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        
        <LoadingBar
            height={2}
            color='#adb5bd'
            progress={progress}
           />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Cart" element={<Cart/>}></Route>
            <Route exact path="/Mens" element={<Mens/>}></Route>
            <Route exact path="/Women" element={<Women/>}></Route>
            <Route exact path="/Electronics" element={<Electronics/>}></Route>
            <Route exact path="/Books" element={<Books/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
