import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
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
      {!isMobile && <NavBar />}
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <MobileNav/>
    </div>
  )
}

export default App