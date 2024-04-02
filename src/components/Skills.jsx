import React from "react";
import { skills } from "../data/data";
const Skills = () => {
  return (
    <section id="skills" className="relative min-h-[80vh] w-full bg-blue text-grey">
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
      <div className="flex justify-center flex-col items-center">
        {/* <h2 className="text-[30px] font-semibold lg:mt-16 mt-10">Skills</h2>   */}
        <h1 className=" text-9xl font-thin font-[gem] mb-2 mt-20">
          Things I'm <span className=" text-black">good</span> at
        </h1>
        <h2 className=" text-3xl lg:text-5xl font-[gem] mb-16 mt-1">
          skills, interests, passion and hobbies
        </h2>

        <div className="flex flex-wrap  mt-10  mb-16 lg:mb-0 lg:mt-16 gap-5 lg:gap-8 max-w-[80vw]">
          {skills[0].goodat.map((skill) => (
            <div key={skill.name}>
              <img
                src={skill.image}
                alt={skill.name}
                className=" lg:h-[15vh] md:h-[15vh] sm:h-[15vh] h-[8vh] w-full border px-2 py-1 bg-white rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
