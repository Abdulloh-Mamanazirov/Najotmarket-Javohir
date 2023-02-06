import React from 'react'
import logo from '../assets/korzina.png'
import Products from './Products';
const Home = () => {
  return (
    <div className='hero'>
      <div className="card text-white bg-dark border-0">
  <img height="550px"  src={logo} className="card-img" alt="React"/>
  <div className="card-img-overlay d-flex flex-column">
    <div className="container">
    <h5 className="card-title display-3 fw-bold mb-0 text-white-50">Najot Market</h5>
    <p className="card-text display-4 text-success">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
</div>
<Products/>
    </div>
  )
}

export default Home;
