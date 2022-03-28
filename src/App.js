import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Homefiles/Home'
import Cart from './Components/Cart/Carts'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Mens from './Components/Mens/Mens';
import Women from './Components/Women/Women';
import Electronics from './Components/Electronic/Electronics';
import Books from './Components/Books/Books';
import Item from './Components/Item Page/Item';

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
            <Route exact path="/Item" element={<Item/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
