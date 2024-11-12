import React, { useState } from "react";
import menu from '../assets/Menu.png';

export const List = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const list = ["Home", "Gallery", "Car Performance", "Ceramic Coding", "Buy Materials", "About Us", "Buy Car"];

  return (
    <div>
      <ul className="flex gap-12 items-center nav-links hidden 2xl:flex">
        {list.map((item, index) => (
          item === 'Buy Car' ? (
            <button key={index} className="bg-red-600 p-3 text-white text-[1.3rem] rounded-lg tracking-widest animate-listStarting hover:bg-red-500 transition-all duration-400">
              <a href="#">{item}</a>
            </button>
          ) : (
            <li
              key={index}
              className="text-white text-[1.3rem] cursor-pointer tracking-widest animate-listStarting opacity-70 hover:opacity-100 transition-all duration-400"
            >
              <a href="#">{item}</a>
            </li>
          )
        ))}
      </ul>

      <div className="flex items-center 2xl:hidden">
        <img
          src={menu}
          alt="Menu Icon"
          className="w-20 h-20 cursor-pointer"
          onClick={() => setShowSidebar(true)}
        />
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-100 flex justify-end transform transition-transform duration-500 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setShowSidebar(false)}
      >
        <div
          className="w-64 h-full bg-gray-800 p-5 text-white"
        >
          <button
            className="text-white text-3xl mb-4"
            onClick={() => setShowSidebar(false)}
          >
            &#10540;
          </button>
          <ul className="space-y-4 px-4">
            {list.map((item, index) => (
              <li key={index} className="text-white text-[1.3rem] cursor-pointer tracking-widest">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
