import React from 'react'
import { navbar, mainlogo } from '../components/constants' // assuming it's exported from constants.js

const Navbar = () => {
  return (
    <div className='py-5 flex flex-row justify-between '>
      <img src={mainlogo} alt="" className="w-50"/>
      

      <ul className="flex gap-4">
        {navbar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <button className="btn btn-primary">Play The game</button>
    </div>
  )
}

export default Navbar
