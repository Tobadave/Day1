import React from 'react'
import { navbar } from '../components/constants' // assuming it's exported from constants.js

const Navbar = () => {
  return (
    <div className='py-5'>
      <button className="btn btn-primary">Primary</button>

      <ul className="flex gap-4">
        {navbar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
