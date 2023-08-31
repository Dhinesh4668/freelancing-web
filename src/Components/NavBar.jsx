import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='name-container'>
        <h1>Kalai <span>Indestrys</span></h1>
      </div>
      {/* link contaienr */}
      <div className='link-container'>
        <Link style={{paddingRight: '20px'}} to='/' title='home'>Home</Link>
        <Link style={{paddingRight: '20px'}} to='/partners' title='home'>Partners</Link>
        <Link style={{paddingRight: '20px'}} to='/work' title='home'>works</Link>
        <Link style={{paddingRight: '20px'}} to='/about' title='home'>About</Link>
      </div>

    </div>
  )
}

export default NavBar
