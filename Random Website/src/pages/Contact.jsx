import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Contact() {
  useEffect(() => {
    gsap.fromTo(
      ".contact-content",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  }, []);

  return (
    <div className="contact-content text-center">
      <h2 className="text-4xl font-bold text-green-600">Contact Us</h2>
      <p className="text-lg mt-4 text-gray-700">
        Feel free to reach out and share the crazy vibes!
      </p>
    </div>
  );
};
