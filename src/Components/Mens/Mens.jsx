import React from 'react'
import men1 from '../Images/men1.jpg'
import men2 from '../Images/men2.jpg'
import men3 from '../Images/men3.jpg'
import '../Mens/Mens.css'

const Mens = () =>{
  return (
    <div className="mens_body">
       <div className="card men_card">
        <img src={men1} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
       <div className="card men_card">
        <img src={men2} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>     
        </div>
      </div>
       <div className="card men_card">
        <img src={men3} className="card-img-top" alt="..." />
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

export default Mens