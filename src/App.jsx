import React from 'react'
import Navbar from './components/Navbar'
import HeaderFile from './components/HeaderFile'
import Hero from './components/Hero'
import Section from './components/Section'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeaderFile/>
      <Hero/>
      <Section/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default App