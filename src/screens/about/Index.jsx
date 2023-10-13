import React from 'react'
import Navbar from '../../components/Navbar'
import CTA from './CTA'
import AboutCards from './AboutCards'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar />
        <CTA />
        <AboutCards />
        <Footer />
    </div>
  )
}

export default About