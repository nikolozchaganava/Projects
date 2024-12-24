import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-24 w-full max-md:max-w-[100vw]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-6 md:space-y-1">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/intake" className="hover:text-gray-300">Complete Intake</Link>
          <Link to="/FAQ" className="hover:text-gray-300">FAQ</Link>
          <Link to="/resources" className="hover:text-gray-300">Resources</Link>
          <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
        </div>
        <p className="text-sm text-center md:text-left mt-4 md:mt-0">
          Web designed By Chago(BEST PROGRAMMER) and Saba(Better PROGRAMMER)
        </p>
      </div>
    </footer>
  );
}