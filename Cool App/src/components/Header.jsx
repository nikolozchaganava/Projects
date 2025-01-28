import React, { useState } from "react";

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 w-full max-w-[100vw] z-10">
        <h1 className="uppercase text-5xl font-bold text-orange-500">Chero</h1>
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <nav className="hidden sm:flex space-x-4">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">About</a>
          <a href="#" className="text-gray-700">Contact</a>
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white backdrop-blur-sm shadow-lg p-4 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-20`}
      >
        <button
          className="text-gray-700 text-xl absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <ul className="mt-10 space-y-4">
          <li><a href="#" className="text-gray-700">Home</a></li>
          <li><a href="#" className="text-gray-700">About</a></li>
          <li><a href="#" className="text-gray-700">Contact</a></li>
        </ul>
      </div>
    </>
  );
};
