import React from 'react'
import Hero from "../components/Landing/Hero"
import { Video } from '../components/Landing/Video'
import Details from '../components/Landing/Details'
import Footer from '../components/Landing/Footer'




const Landingpage = () => {
  return (
    <>
      <Hero />
      <div className='px-10'>
        <Video />
        <Details />
        <Footer />
      </div>
    </>
  )
}

export default Landingpage