import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav({ navLinksRef }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
          </svg>
        </button>
      </div>

      <ul className="hidden md:flex md:items-center md:gap-6">
        {links.map((link, index) => (
          <li
            key={index}
            ref={(el) => (navLinksRef.current[index] = el)}
            className="capitalize text-gray-600 hover:text-gray-800 font-semibold text-lg opacity-0 translate-y-2"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div
        className={`fixed inset-0 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 bg-opacity-75`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <aside
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out"
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
            <button
              className="focus:outline-none"
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-6 space-y-4 px-4">
            {links.map((link, index) => (
              <li key={index} className="capitalize">
                <Link
                  to={link.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </nav>
  );
}
