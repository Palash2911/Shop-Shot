import React from 'react'
import elec from '../Electronic/elec.jpg'
import '../Electronic/Elec.css'

const Electronics = () => {
  return (
    <div className="elec_body">
      <div className="card elec_card">
        <img src={elec} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i class="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card elec_card">
        <img src={elec} className="card-img-top" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i class="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card elec_card">
        <img src={elec} className="card-img-top" alt="..." />
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

export default Electronics