import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  <nav className="flex space-x-4">
    <Link
      to="/"
      className="text-white hover:text-gray-300 transition duration-300"
    >
      Home
    </Link>
    <Link
      to="/about"
      className="text-white hover:text-gray-300 transition duration-300"
    >
      About
    </Link>
    <Link
      to="/contact"
      className="text-white hover:text-gray-300 transition duration-300"
    >
      Contact
    </Link>
  </nav>
};
