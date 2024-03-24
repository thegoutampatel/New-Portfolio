import React from 'react'
import pimg from '../assets/images/Personal-Portfolio.jpg';
import './Projects.css'
const Projects = () => {
  const foodData = [
    {
      name: "Youtube Clone",
      link: "www.google.com",
      Github: "www.github.com",
      image: "/images/egg.png",
      type: "FrontEnd",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/ramen.png",
      type: "lunch",
    },
  ];
 

  return (
    <section id="projects">
      <div class="custom-shape-divider-top-1639338384">
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
      <h2 className="text-[30px] font-semibold">Skills</h2>
      <div class="projects-list">
        
        <div
          className="relative rounded-lg cursor-pointer transition-transform duration-500 hover:scale-125 hover:z-50 z-0"
        >
          <img
            src={pimg}
            className="rounded-lg w-38 lg:w-[20vw] h-64 lg:h-[30vh] border border-gray-400  relative hover:opacity-50 z-10" // Set z-index for the image
            alt="img"
          />
          <div className="absolute bottom-10 left-0 p-2 flex flex-col">
            <p className="text-white text-xl font-bold">
              Personal Portfolio
            </p>
            <div className="flex gap-7">
              <p className=" text-white">2024</p>
              <p className="text-white flex items-center gap-1">
                Hello
              </p>
            </div>
            <p className="text-white text-[10px]">
              Hello
            </p>
          </div>
        </div>

        {/* 2 */}

        <div
          className="relative rounded-lg cursor-pointer transition-transform duration-500 hover:scale-125 hover:z-50 z-0"
        >
          <img
            src={pimg}
            className="rounded-lg w-38 lg:w-[20vw] h-64 lg:h-[30vh] border border-gray-400  relative hover:opacity-50 z-10" // Set z-index for the image
            alt="img"
          />
          <div className="absolute bottom-10 left-0 p-2 flex flex-col">
            <p className="text-white text-xl font-bold">
              Personal Portfolio
            </p>
            <div className="flex gap-7">
              <p className=" text-white">2024</p>
              <p className="text-white flex items-center gap-1">
                Hello
              </p>
            </div>
            <p className="text-white text-[10px]">
              Hello
            </p>
          </div>
        </div>

        {/* 3 */}

        <div
          className="relative rounded-lg cursor-pointer transition-transform duration-500 hover:scale-125 hover:z-50 z-0"
        >
          <img
            src={pimg}
            className="rounded-lg w-38 lg:w-[20vw] h-64 lg:h-[30vh] border border-gray-400  relative hover:opacity-50 z-10" // Set z-index for the image
            alt="img"
          />
          <div className="absolute bottom-10 left-0 p-2 flex flex-col">
            <p className="text-white text-xl font-bold">
              Personal Portfolio
            </p>
            <div className="flex gap-7">
              <p className=" text-white">2024</p>
              <p className="text-white flex items-center gap-1">
                Hello
              </p>
            </div>
            <p className="text-white text-[10px]">
              Hello
            </p>
          </div>
        </div> 

        {/* 4 */}

        <div
          className="relative rounded-lg cursor-pointer transition-transform duration-500 hover:scale-125 hover:z-50 z-0"
        >
          <img
            src={pimg}
            className="rounded-lg w-38 lg:w-[20vw] h-64 lg:h-[30vh] border border-gray-400  relative hover:opacity-50 z-10" // Set z-index for the image
            alt="img"
          />
          <div className="absolute bottom-10 left-0 p-2 flex flex-col">
            <p className="text-white text-xl font-bold">
              Personal Portfolio
            </p>
            <div className="flex gap-7">
              <p className=" text-white">2024</p>
              <p className="text-white flex items-center gap-1">
                Hello
              </p>
            </div>
            <p className="text-white text-[10px]">
              Hello
            </p>
          </div>
        </div>

        {/* 5 */}

        <div
          className="relative rounded-lg cursor-pointer transition-transform duration-500 hover:scale-125 hover:z-50 z-0"
        >
          <img
            src={pimg}
            className="rounded-lg w-38 lg:w-[20vw] h-64 lg:h-[30vh] border border-gray-400  relative hover:opacity-50 z-10" // Set z-index for the image
            alt="img"
          />
          <div className="absolute bottom-10 left-0 p-2 flex flex-col">
            <p className="text-white text-xl font-bold">
              Personal Portfolio
            </p>
            <div className="flex gap-7">
              <p className=" text-white">2024</p>
              <p className="text-white flex items-center gap-1">
                Hello
              </p>
            </div>
            <p className="text-white text-[10px]">
              Hello
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Projects