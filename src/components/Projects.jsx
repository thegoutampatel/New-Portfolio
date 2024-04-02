import React from 'react'
import pimg from '../assets/images/Personal-Portfolio.jpg';
import Button from './Button'
import { FaCode } from "react-icons/fa6";
import { GoLink } from "react-icons/go";

import {projects} from '../data/data'
const Projects = () => {

  return (
    <section id="projects">
      <div className="custom-shape-divider-top-1639338384">
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
      <h2 className="text-[30px] font-semibold">Projects</h2>
      <div className="flex flex-wrap justify-center items-center p-[50px] gap-[2vw]">
        
        {/* 2 */}

        {
          projects.map((p)=>(
            <div key={p.id} className='flex flex-col w-[60vw] lg:w-[21vw]  bg-black  rounded-lg p-8 transition-transform duration-500 hover:scale-110'>
          <img src={p.image} alt="" className=' object-cover rounded-md' /> 
          <div className=' flex flex-col items-start bg-black mt-4'>
            <div className='flex gap-3 flex-wrap'>
              {
                p.tags.map((s, index) => (
                    <p key={index} className='text-orange font-semibold bg-slate-700 rounded-lg px-1 lg:px-3 py-1 text-md'>{s}</p>
                  ))
              }
              
              
            </div>
            <p className=' text-3xl font-bold mt-5'>{p.title}</p>
            <p className='text-gray-500'>{p.date}</p>
            <p className='mt-5 text-xl text-gray-400'>{`${p.description.substring(0,100)}`+ '....' }</p>
            <div className='flex gap-12 lg:ml-8 lg:gap-28 mt-5'>
              <a href={p.github} target='_black'><Button name={"Code"} logo={<FaCode />}/></a>
              <a href={p.webapp} target='_black'><Button name={"Live"} logo={<GoLink />}/></a>
            </div>
          </div>
        </div>
          ))
        }
        
      </div>
    </section>
  );
}

export default Projects