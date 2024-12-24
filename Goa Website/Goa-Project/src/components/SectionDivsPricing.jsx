import Aos from "aos";
import React, { useEffect } from "react";
import { FaRocket, FaBolt, FaTachometerAlt, FaStar } from "react-icons/fa";

export default function SectionDivsPricing() {
  const speedList = [
    {
      heading: "Speed 1",
      smallHeading: "Beginners Level",
      price: "150GEL",
      icon: <FaBolt size={36} />,
      gradient: "bg-gradient-to-b from-purple-500 to-indigo-600",
    },
    {
      heading: "Speed 2",
      smallHeading: "Intermediate Level",
      price: "300GEL",
      icon: <FaRocket size={36} />,
      gradient: "bg-gradient-to-b from-blue-500 to-teal-400",
    },
    {
      heading: "Speed 3",
      smallHeading: "Advanced Level",
      price: "400GEL",
      icon: <FaTachometerAlt size={36} />,
      gradient: "bg-gradient-to-b from-green-400 to-emerald-500",
    },
    {
      heading: "Speed 4",
      smallHeading: "Expert Level",
      price: "600GEL",
      icon: <FaStar size={36} />,
      gradient: "bg-gradient-to-b from-yellow-400 to-orange-500",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [])

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-6xl font-extrabold text-center text-gray-500 mb-12 drop-shadow-md">
        Fullstack Course Pricing
      </h2>
      <p className="text-center text-gray-400 mb-10 text-xl">
        Choose a speed that fits your learning journey.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {speedList.map((item, index) => (
          <div
            key={index}
            className={`
              relative bg-opacity-60 bg-white backdrop-blur-lg shadow-2xl rounded-lg
              px-8 py-12 text-center overflow-hidden transform transition-all duration-500
              hover:bottom-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-3
              ${item.gradient}
            `} data-aos={"fade-up"} data-aos-delay={index * 200}
          >
            <div className={`absolute inset-0 opacity-20 ${item.gradient}`}></div>

            <div className="relative z-10 mx-auto mb-6 text-white">
              {item.icon}
            </div>

            <h3 className="relative z-10 text-3xl font-bold text-white mb-2">
              {item.heading}
            </h3>

            <p className="relative z-10 text-gray-200 mb-6">
              {item.smallHeading}
            </p>

            <div className="relative z-10 text-2xl font-extrabold text-white mb-6">
              {item.price}
            </div>

            <button className="relative z-10 bg-white text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
              Enroll Now
            </button>

            <div
              className="absolute inset-0 rounded-lg border-4 border-transparent pointer-events-none"
              style={{
                boxShadow: `0px 0px 20px 4px rgba(255, 255, 255, 0.5)`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}