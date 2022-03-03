import React, {useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {

  let histo = useNavigate();
  let location = useLocation();
  useEffect(() =>{
    console.log(location);
  }, [location]);

  const logoutbtn = ()=>{
      localStorage.removeItem('token');
      histo("/login")
      props.showAlert("Logout Successfully", "success")
  }

  const setname = ()=>{
        if(location.pathname==="/" || location.pathname==="/Cart" || location.pathname==="/login" || location.pathname==="/signup")
        {
            return "All Categories"
        }
        else if(location.pathname==="/Mens")
        {
            return "Mens Clothing"
        }
        else if(location.pathname==="/Women")
        {
            return "Women's Wear"
        }
        return location.pathname.toString().substring(1);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><em><b>Shop Shot</b></em></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                    <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown mx-2">
                    <a className={`nav-link dropdown-toggle`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{setname()}</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/Electronics">Electronics</Link></li>
                        <li><Link className="dropdown-item" to="/Mens">Mens Clothing</Link></li>
                        <li><Link className="dropdown-item" to="/Women">Women's Wear</Link></li>
                        <li><Link className="dropdown-item" to="/Books">Books</Link></li>
                    </ul>
                </li>
                <li className="nav-item mx-3">
                    <Link className={`nav-link ${location.pathname==="/Cart"? "active":""}`} aria-current="page" to="/Cart">Cart</Link>
                </li>
            </ul>
            {!localStorage.getItem('token')?<form className="d-flex">
                <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign-Up</Link>
            </form>: <form className="d-flex">
                <button className="btn btn-primary mx-2" onClick={logoutbtn}>Log Out</button>
            </form>}
            </div>
        </div>
    </nav>
  )
}

export default Navbar
