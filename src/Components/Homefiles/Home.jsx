import React from 'react'
import img from '../Homefiles/img.png'
import '../Homefiles/Home.css'
import Books from '../Books'
import Electronics from '../Electronics'
import Women from '../Women'
import Mens from '../Mens'

const Home = () => {
  return (
    <>
      <div className='container'>
          <h4>Your Shopping Arena</h4>
          <h1>Shop Shot</h1>
      </div>
      <Mens/>
      <Women/>
      <Books/>
      <Electronics/>
    </>
  )
}

export default Home
