import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useMediaQuery } from 'react-responsive';
import MobileNav from './components/MobileNav'

const App = () => {
  const isMobile = window.innerWidth <= 768;
  const isDesktop = window.innerWidth >= 768;

  return (
    <div>
      {!isDesktop && <MobileNav/>}
      {!isMobile && <NavBar />}
      <Home/>
      <About/>
      <Skills />
      <Education/>
      
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App