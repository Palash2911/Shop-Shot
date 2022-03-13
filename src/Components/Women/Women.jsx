import React from 'react'
import women from '../Women/women.jpg'
import '../Women/Women.css'

const Women = () => {
  return (
    <div className="women_body">
       <div className="card women_card">
        <img src={women} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i class="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>       
        </div>
      </div>
       <div className="card women_card">
        <img src={women} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i class="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
       <div className="card women_card">
        <img src={women} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i class="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>      
        </div>
      </div>
    </div>
  )
}

export default Women
