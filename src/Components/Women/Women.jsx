import React from 'react'
import women1 from '../Images/women1.jpg'
import women2 from '../Images/women2.jpg'
import women3 from '../Images/women3.jpg'
import '../Women/Women.css'

const Women = () => {
  return (
    <div className="women_body">
       <div className="card women_card">
        <img src={women1} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>       
        </div>
      </div>
       <div className="card women_card">
        <img src={women2} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
       <div className="card women_card">
        <img src={women3} className="card-img-top" alt="..." />
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

export default Women
