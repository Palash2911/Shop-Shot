import React from 'react'
import { elecdata } from '../../Data/Elecdata'
import '../Electronic/Elec.css'

const Electronics = () => {
  return (
    <div className="elec_body">
      {elecdata.map((elec) => {
        return(
          <div className="card elec_card">
            <img src={elec.img} className="card-img-top elec_img" alt="..." />
            <div className="card-body">
                <div className="ct">
                  <h5 className="card-title">{elec.Title}</h5>
                  <i className="fa fa-shopping-cart fa-lg"></i>
                </div>
              <p className="card-text">{elec.Review}</p>
            </div>
          </div>
        )
      })};
    </div>
  )
}

export default Electronics