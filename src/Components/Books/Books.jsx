import React from 'react'
import books from '../Books/books.jpg'
import '../Books/Books.css'

const Books = () => {
  return (
    <div className="book_body">
      <div className="card book_card">
        <img src={books} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i class="fa fa-shopping-cart fa-lg"></i>
            </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      <div className="card book_card">
        <img src={books} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="ct">
              <h5 className="card-title">Card title</h5>
              <i class="fa fa-shopping-cart fa-lg"></i>
            </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      <div className="card book_card">
        <img src={books} className="card-img-top" alt="..." />
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

export default Books
