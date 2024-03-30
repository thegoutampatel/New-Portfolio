// import React, { useState } from 'react'
// import Logo from '../assets/images/Logo.webp'
// import { PiCirclesFour } from "react-icons/pi";

// const MobileNav = () => {

//   const [toggle, setToggle] = useState(false);

//   return (
//     <div>
//       <div className=' w-full fixed bottom-0 flex  flex-col z-50 bg-[#222831] justify-between px-[1rem] py-[1rem]'>

//        {toggle && (
//           <div className="flex w-full z-50 bg-[#222831] justify-between px-[1rem] py-[5rem] rounded-lg">
//           <ul className="nav-links ml-10">
//             <li><a href="#about">About</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//             <li><a href="#contact">Education</a></li>
//           </ul>

//           <button onClick={() => setToggle(!toggle)}>close</button>
//         </div>
//         )
//        }

//         {!toggle && <div className='flex justify-between'>
//           <div>
//               <img className='w-[80px] h-[30px]' src={Logo} alt="" />
//           </div>
//           <div>
//               <div><PiCirclesFour className='text-[30px] text-white' onClick={() => setToggle(!toggle)} /></div>
//           </div>
//         </div>}
//     </div>
//   </div>
//   )
// }

import React, { useState, useEffect, useRef } from "react";
import Logo from '../assets/images/logoo.svg';
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    const handleScroll = () => {
      closeSidebar();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-blue flex overflow-hidden">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`absolute bg-black text-white w-56 min-h-full overflow-y-auto transition-transform ${
          isOpen ? "" : "-translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="p-4">
        <img
          className="w-[100px] h-[100px] ml-4 cursor-pointer"
          src={Logo}
          alt=""
        />
          <ul className="ml-4 text-2xl flex flex-col gap-5">
            <li className="mb-2">
              <a
                href="#home"
                className="block hover:text-indigo-400"
                onClick={closeSidebar}
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#about"
                className="block hover:text-indigo-400"
                onClick={closeSidebar}
              >
                About
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#skills"
                className="block hover:text-indigo-400"
                onClick={closeSidebar}
              >
                Skills
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#qualification"
                className="block hover:text-indigo-400"
                onClick={closeSidebar}
              >
                Qualification
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#projects"
                className="block hover:text-indigo-400"
                onClick={closeSidebar}
              >
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#contact"
                className="block hover:text-indigo-400"
                onClick={closeSidebar}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="bg-blue flex w-full justify-between max-h-[10vh]">
        {/* Navbar */}
        <img
          className="w-[100px] h-[100px] ml-4 cursor-pointer"
          src={Logo}
          alt=""
        />
        <button className="mr-8" onClick={toggleSidebar}>
        {isOpen ? (
            <RxCross2 className="w-14 h-14 text-white" />
          ) : (
            <IoIosMenu className="w-14 h-14 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
