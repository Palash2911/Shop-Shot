import React from 'react'
import { womendata } from '../../Data/Womendata'
import '../Women/Women.css'

const Women = () => {
  return (
    <div className="women_body">
      {womendata.map((women) => {
      return(
        <div className="card women_card">
          <img src={women.img} className="card-img-top" alt="..." />
          <div className="card-body">
              <div className="ct">
                <h5 className="card-title">{women.Title}</h5>
                <i className="fa fa-shopping-cart fa-lg"></i>
              </div>
            <p className="card-text">{women.Review}</p>       
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Women
