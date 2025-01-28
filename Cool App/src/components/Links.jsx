import React from "react";

export default function Links() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/services" },
    { label: "Login", href: "/login" },
  ];
  return (
    <ul className="flex gap-5">
      {links.map((link, index) => (
        <li key={index} className="text-xl">
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}
