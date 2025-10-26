import React from 'react'
import Hero from "../components/Landing/Hero"
import Video from '../components/Landing/Video'
import Details from '../components/Landing/Details'
import Footer from '../components/Landing/Footer'
import Program from '../components/Landing/Program'
import Section from '../components/Landing/Section'
import Faq from '../components/Landing/Faq'
import Info from '../components/Landing/Campus'
// Info
// Faq
// Program



const Landingpage = () => {
  return (
    <>
      <Hero />
      {/* <div className='px-0'> */}
        <Video />
        {/* Our Partners */}
        <Details /> 
        {/* Boxshading */}
        <Program />
        <Info />
        <Faq/>
        <Footer />
      {/* </div> */}
    </>
  )
}

export default Landingpage