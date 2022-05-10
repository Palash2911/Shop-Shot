import React from 'react'
import { Mensdata } from '../../Data/Mensdata'
import '../Mens/Mens.css'

const Mens = () => {
  return (
    <div className="mens_body">
      {Mensdata.map((mens) => {
        <div className="card men_card">
          <img src={mens.img} className="card-img-top" alt="..." />
          <div className="card-body">
              <div className="ct">
                <h5 className="card-title">{mens.Title}</h5>
                <i className="fa fa-shopping-cart fa-lg"></i>
              </div>
            <p className="card-text">{mens.Review}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default Mens
