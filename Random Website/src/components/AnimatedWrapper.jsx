import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export default function AnimatedWrapper ({ children }) {
  const location = useLocation();

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      ".page-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    return () => timeline.kill();
  }, [location]);

  return <div className="page-content">{children}</div>;
};
