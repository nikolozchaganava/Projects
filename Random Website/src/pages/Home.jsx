import React, { useEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".home-content",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="home-content text-center">
        <Header />
      <h2 className="text-4xl font-bold text-indigo-600">Welcome Home!</h2>
      <p className="text-lg mt-4 text-gray-700">
        This is the home page with animations and crazy vibes.
      </p>
    </div>
  );
};
