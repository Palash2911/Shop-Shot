import React from 'react'
import watch from '../Images/watch.jpg'
import earphone from '../Images/earphone.png'
import mouse from '../Images/mouse.jpg'
import '../Electronic/Elec.css'

const Electronics = () => {
  return (
    <div className="elec_body">
      <div className="card elec_card">
        <img src={watch} className="card-img-top elec_img" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card elec_card">
        <img src={earphone} className="card-img-top elec_img" alt="..." />
        <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card elec_card">
        <img src={mouse} className="card-img-top elec_img" alt="..." />
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

export default Electronics