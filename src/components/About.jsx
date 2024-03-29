import React from 'react'
import './About.css'
import myimg from '../assets/images/me.jpg'
import arrow from '../assets/images/arrow.svg'
import downImg from '../assets/images/download.svg'
import Button from './Button'
import { VscCloudDownload } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <div class="custom-shape-divider-top-1639336966">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="relative flex flex-col items-center justify-center">
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
        <a href="./files/GoutamPatel_Resume.pdf" class="resume" download="">
        <Button name={"Resume"} src={downImg}/>
        </a>
       
      </div>
      <div className="about--right">
          <img src={myimg} alt="" className='home--image'/>
      </div>















      {/* <div class="about--right">
        <p class="about--tech">Technologies I use</p>
        <div class="tech">
          <div>
            <img src="./Images/html.svg" alt="html" />
          </div>
          <div>
            <img src="./Images/css.svg" alt="css" />
          </div>
          <div>
            <img src="./Images/js.svg" alt="js" />
          </div>
          <div>
            <img src="./Images/reactjs-icon.svg" alt="React-js" />
          </div>
          <div>
            <img src="./Images/tailwindcss-icon.svg" alt="Tailwind" />
          </div>
          <div>
            <img src="./Images/java-icon.svg" alt="java" />
          </div>
          <div>
            <img src="./Images/git.svg" alt="git" />
          </div>
          <div>
            <img src="./Images/github.svg" alt="github" />
          </div>
          <div>
            <img src="./Images/figma.svg" alt="figma" />
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default About