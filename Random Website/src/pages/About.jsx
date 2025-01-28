import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function About() {
  useEffect(() => {
    gsap.fromTo(
      ".about-content",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="about-content text-center">
      <h2 className="text-4xl font-bold text-blue-600">About Us</h2>
      <p className="text-lg mt-4 text-gray-700">
        We are passionate about creating crazy web experiences.
      </p>
    </div>
  );
};
