import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-black min-h-14vh flex flex-col justify-center items-center py-8 px-12 gap-8 z-10">
      <div className="logo animate-opening">
        <p><a href="#home" className="text-grey bg-orange border-2 border-orange rounded-full py-3 px-4 text-2xl font-bold">GM</a></p>
      </div>
      <ul className="nav-links flex items-center gap-8">
        <li className="animate-opening2"><a href="#about" className="text-grey text-lg font-semibold hover:text-gray-300">About</a></li>
        <li className="animate-opening2"><a href="#projects" className="text-grey text-lg font-semibold hover:text-gray-300">Projects</a></li>
        <li className="animate-opening2"><a href="#contact" className="text-grey text-lg font-semibold hover:text-gray-300">Contact</a></li>
        <li className="animate-opening2">
          <a href="./files/GoutamPatel_Resume.pdf" className="resume bg-orange py-2 px-4 flex items-center rounded-lg font-semibold hover:bg-gray-300">
            Resume
            <img src="./Images/downloadIcon.png" alt="download" className="w-6 filter invert" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
