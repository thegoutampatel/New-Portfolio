import React, { useState, useEffect } from 'react';
import './NavBar.css'
import dowicon from '../assets/images/downloadIcon.png'
import Logo from '../assets/images/logoo.svg'


const NavBar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);

      clearTimeout(scrollTimeout);
      setScrollTimeout(
        setTimeout(() => {
          setVisible(true);
        }, 500)
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, scrollTimeout]);

  return (
    <nav className={`fixed w-full transition-all duration-300 ${visible ? 'top-0' : '-top-20'}`}>
      <div className="logo">
        <img className='w-[100px] h-[100px]' src={Logo} alt="" />
      </div>
      <ul className="nav-links">
         <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div>

      </div>
    </nav>
  )
}

export default NavBar

