import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const navLinksRef = useRef([]);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        titleRef.current,
        { y: "-10rem", opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      )
      .to(
        navLinksRef.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          delay: 0.5,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  const handleSearchToggle = () => {
    setIsSearchExpanded((prev) => !prev);
  };

  return (
    <header
      ref={headerRef}
      className="flex items-center px-10 py-5 justify-between fixed bg-white min-w-full max-100vw"
    >
      <h1 ref={titleRef} className="text-3xl font-bold">
        <Link to={"/"}>Apple Company</Link>
      </h1>
      <form
        className={`flex items-center justify-center py-3 px-6 bg-slate-50 rounded-full gap-3 transition-all duration-500`}
        style={{
          width: isSearchExpanded ? "33%" : "fit-content",
        }}
      >
        <input
          type="search"
          placeholder="Search....."
          className={`px-2 outline-none transition-all duration-00`}
          style={{
            width: isSearchExpanded ? "100%" : "0",
            opacity: isSearchExpanded ? "1" : "0",
          }}
        />
        <button type="button" onClick={handleSearchToggle}>
          <FaSearch className="scale-140" />
        </button>
      </form>
      <Nav navLinksRef={navLinksRef} />
    </header>
  );
}
