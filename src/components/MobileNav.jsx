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
