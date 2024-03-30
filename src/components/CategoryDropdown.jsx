import React, { useState } from 'react';

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-screen h-screen dark:bg-gray-900 justify-center items-center">
      <div className="w-[150px] text-gray-900 dark:text-gray-100">
        <div className="relative w-full group">
          <label className="text-xs text-gray-400">Select Category</label>
          <button
            className="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold"
            onClick={toggleDropdown}
          >
            All
          </button>
          <div
            className={`absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } duration-200 p-1 bg-gray-100 dark:bg-gray-800 border border-dimmed text-xs md:text-sm`}
          >
            <div className="w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
              All (9)
            </div>
            <div className="w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
              Full Stack (6)
            </div>
            <div className="w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
              Front End (1)
            </div>
            <div className="w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
              Freelance (1)
            </div>
            <div className="w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
              New Stack Project (1)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
