import React from 'react'
import artof from '../Images/artoffc.png'
import '../Books/Books.css'
import rich from '../Images/Rich_dad.jpg'
import atomic from '../Images/Atomic.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Books = () => {
  return (
    <div className="book_body">
      <Link to="/Items">
      <div className="card book_card">
          <img src={rich} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      </Link>
      <div className="card book_card">
        <img src={artof} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      <div className="card book_card">
        <img src={atomic} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
    </div>
  )
}

export default Books
