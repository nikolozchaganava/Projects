import React, { useState } from "react";
import { Link } from "react-router";

export default function NavDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const linkList = [
    { name: "Reviews", to: "/reviews" },
    { name: "Work", to: "/work" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Pricing", to: "/pricing" },
    { name: "How it works", to: "/howItWorks" },
    { name: "News", to: "/news" },
    { name: "Blog Feed", to: "/blogs" },
  ];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button className="linkHover"
          onClick={toggleDropdown}
        >
          Menu
        </button>
      </div>
      <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-300 ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 invisible scale-95'}`}>
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
    </div>
  );
}
