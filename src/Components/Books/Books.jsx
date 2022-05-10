import React from 'react'
import '../Books/Books.css'
import { booksdata } from '../../Data/Booksdata'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Books = () => {
  return (
    <div className="book_body">
      {booksdata.map((books) => {
        // console.log(books.Title);
        return(
          <Link to="/Items">
          <div className="card book_card">
              <img src={books.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="ct">
                  <h5 className="card-title">{books.Title}</h5>
                  <i className="fa fa-shopping-cart fa-lg"></i>
                </div>
                <p className="card-text">{books.Review}</p>
              </div>
          </div>
        </Link>
          )
      })}
    </div>
  )
}

export default Books
