import React from 'react'
import '../Homefiles/Home.css'
import Books from '../Books/Books'
import Electronics from '../Electronic/Electronics'
import Women from '../Women/Women'
import Mens from '../Mens/Mens'

const Home = () => {
  return (
    <>
      <div className='container'>
          <h4>Your Shopping Arena</h4>
          <h1>Shop Shot</h1>
      </div>
      <div className="all_cato">
        <div className="book_container my-5">
            <Books/>
        </div>
        <div className="men_container my-5">
            <Mens/>
        </div>
        <div className="women_container my-5">
            <Women/>  
        </div>
        <div className="elec_container my-5">
            <Electronics/>  
        </div> 
      </div>    
    </>
  )
}

export default Home
