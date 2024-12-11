import React, { useState } from "react";
import { Link } from "react-router";

import Team from '../pages/Team';
import Work from '../pages/Work';
import Testimonials from '../pages/Testimonials';
import Pricing from '../pages/Pricing';
import HowItWorks from '../pages/HowItWorks.jsx';
import News from '../pages/News.jsx';
import Blogs from '../pages/Blogs.jsx';

export default function NavDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const linkList = [
    { name: "Team", to: "/team" },
    { name: "Work", to: "/work" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Pricing", to: "/pricing" },
    { name: "How it works", to: "/how-it-works" },
    { name: "News", to: "/news" },
    { name: "Blog Feed", to: "/blogs" },
  ];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {linkList.map((item, index) => (
              <Link key={index} to={item.to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}