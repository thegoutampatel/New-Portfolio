import React from 'react'
import {education} from '../data/data'
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationCard from './cards/EducationCard';4

const About = () => {
  return (


    <section id='qualification' className='w-full h-full text-grey bg-black relative'>
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
      <div className='flex justify-center flex-col items-center pb-8'>
        <h2 className='text-[30px] font-semibold lg:mt-16 mt-10 mb-10'>Qualifications</h2>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
       
      </div>

    </section>
  );
}

export default About