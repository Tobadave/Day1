import React from 'react'
import Hero from "../components/Landing/Hero"
import { Video } from '../components/Landing/Video'
import Details from '../components/Landing/Details'
import Footer from '../components/Landing/Footer'
import Program from '../components/Landing/Program'
// Program



const Landingpage = () => {
  return (
    <>
      <Hero />
      <div className='px-10'>
        <Video />
        <Details />
        <Program />
        <Footer />
      </div>
    </>
  )
}

export default Landingpage