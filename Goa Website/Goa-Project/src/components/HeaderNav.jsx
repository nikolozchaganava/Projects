import React from "react";
import { Link } from "react-router";
import NavDropDown from "./NavDropDown";

export default function HeaderNav() {
  const list = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Services", href: "/services" },
    { label: "More" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-fit flex items-center justify-center">
      <ul className="flex justify-end w-fit items-center">
        {list.map((item, index) => {
          item.label === "More" ? (
              <li key={index}>
                <NavDropDown />
              </li>
           ) : item.label === "Contact" ? (
              <li key={index}>
                <button>{item.label}</button>
              </li>
            ) : (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            )
        })}
      </ul>
    </nav>
  );
}
