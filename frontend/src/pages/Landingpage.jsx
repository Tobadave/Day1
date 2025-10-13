import React from 'react'
import Hero from "../components/Hero"
import Navbar from '../components/Navbar'
import { Video } from '../components/Video'
import Details from '../components/Details'



const Landingpage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Video />
    <Details />
    </>
  )
}

export default Landingpage