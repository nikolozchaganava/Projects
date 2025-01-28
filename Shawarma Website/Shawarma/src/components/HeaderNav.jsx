import React from "react";

export default function HeaderNav() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
  ];

  return (
    <nav className="w-fit">
      <ul className="w-fit flex gap-5 items-center">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="inline-block text-xl font-semibold linkHover relative">{label}</a>
          </li>
        ))}
        <li>
          <button className="text-lg uppercase tracking-wider font-semibold border-2 border-black px-5 py-3 hover:bg-red-500 hover:border-red-500 hover:text-white transition-all rounded-sm">Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}
