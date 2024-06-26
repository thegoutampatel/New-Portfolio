import React from 'react'
import myimg from '../assets/images/me.jpg'
import arrow from '../assets/images/arrow.svg'
import downImg from '../assets/images/download.svg'
import Button from './Button'
import {Bio} from '../data/data'


const About = () => {
  return (
    <section id="about">
      <div className="custom-shape-divider-top-1639336966">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
        <div className="relative flex flex-col items-center justify-center">
          <img src={arrow} alt="" className='absolute top-[-20px] left-10 animate-scale' />
          <h2 className=' text-[30px] font-semibold'>About Me</h2>
          <p className="about--text lg:max-w-[30vw] mb-10">
            I am currently an undergraduate student pursuing a{" "}
            <span id="about--degree">
              Bachelor of Technology in Computer Science and Engineering.
            </span>{" "}
            Alongside my studies, I am actively learning web development,
            specifically focusing on the MERN stack. My goal is to acquire the
            skills needed to create responsive websites
          </p>
          <a href={Bio.resume} className="resume" download="">
          <Button name={"Resume"} src={downImg}/>
          </a>
        
        </div>
        <div className="mt-10 lg:mt-0 ">
            <img src={myimg} alt="" className=' rounded-full h-[60vw] lg:h-[20vw] border-orange border-2'/>
        </div>
      </div>

    </section>
  );
}

export default About