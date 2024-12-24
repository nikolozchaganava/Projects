import React, { useState } from "react";
import NavDropDown from "./NavDropDown";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

export default function HeaderNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const list = [
    { label: "Home", href: "homeBanner-section" },
    { label: "About", href: "about-section" },
    { label: "Services", href: "services-section" },
    { label: "More" },
    { label: "Contact", href: "contact-section" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <nav className="w-full flex items-center justify-between p-4 text-[#595959] max-md:p-0">
        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-6">
            {list.map((item, index) => (
              item.label === "More" ? (
                <li key={index}>
                  <NavDropDown />
                </li>
              ) : item.label === "Contact" ? (
                <li key={index}>
                  <button>
                    <ScrollLink
                      to={item.href}
                      smooth={true}
                      duration={1000}
                      className="uppercase border-2 border-black text-black font-semibold px-8 py-3 hover:text-white hover:bg-green-600 hover:border-green-600 transition-all cursor-pointer tracking-wide"
                    >
                      {item.label}
                    </ScrollLink>
                  </button>
                </li>
              ) : (
                <li key={index}>
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={1000}
                    className="linkHover hover:text-green-500 transition-all cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              )
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="text-4xl">
            <FaBars/>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-blue-300 backdrop-blur-md bg-opacity-10 z-50 lg:hidden transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute top-0 left-0 p-4">
          <button onClick={toggleSidebar} className="text-slate-50 text-7xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center mt-20">
          <ul className="text-slate-50 space-y-10 absolute top-1/2 transform -translate-y-1/2 tracking-widest">
            {list.map((item, index) => (
              item.label === "More" ? (
                <li key={index} className="text-3xl">
                  <NavDropDown />
                </li>
              ) : (
                <li key={index}>
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={1000}
                    onClick={toggleSidebar}
                    className="linkHover hover:text-green-300 transition-all cursor-pointer text-3xl"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}