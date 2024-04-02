import React from 'react';
import './Home.css';
import myimg from '../assets/images/me.jpg'
import laptop from '../assets/images/laptop.svg';
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';
import { FaLinkedin } from "react-icons/fa";



const Home = () => {
  return (
    <section id="home">
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="home-content">
        <div className="home--text">
          <p className='font-semibold text-7xl mb-5'>Hi, I'm Goutam</p>
          <div className='flex gap-2 mb-10'>
            <p>I am a </p>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                ' Front-End Developer', // initially rendered starting point
                1000,
                ' Back-End Developer',
                1000,
                ' Full-Stack Developer',
                1000,
                ' Web Developer',
                500,
              ]}
              speed={50}
              style={{ fontSize: '1em', color: '#ff5722'}}
              repeat={Infinity}
           />
          </div>
          <a href="https://www.linkedin.com/in/goutam-patel/" target='_black'><Button name={"Connect With"} logo={<FaLinkedin />}/></a>
        </div>
        <div className="lg:w-[25vw] w-[50vw] " id=''>
          <img src={laptop} alt="profile" className=' pointer-events-none'/>
        </div>
      </div>
      <div className=''>
        <a href='#about' className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
      </div>
    </section>
  );
}

export default Home;
