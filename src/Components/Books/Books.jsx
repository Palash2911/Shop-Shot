import React from 'react'
import books from '../Books/books.jpg'
import '../Books/Books.css'

const Books = () => {
  return (
    <div className="book_body">
      <div className="card book_card">
        <img src={books} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  )
}

export default Books
