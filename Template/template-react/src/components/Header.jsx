import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Header() {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const navLinksRef = useRef([]);

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
          delay: .5,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <header ref={headerRef} className="flex items-center px-10 py-5 justify-between">
      <h1 ref={titleRef} className="text-3xl font-bold">
        <Link to={"/"}>ChagoLand</Link>
      </h1>
      <Nav navLinksRef={navLinksRef} />
    </header>
  );
}
