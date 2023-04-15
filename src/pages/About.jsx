import React from 'react'
import '../App.css'
import Navbar from '../components/navbar/navbar'
import Title from '../components/title/title'
import About_Me from '../components/about_me/about_me'
import Footer from '../components/Footer/footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <Title title="About"/>
      <About_Me />
      <Footer />
    </div>
  )
}

export default About