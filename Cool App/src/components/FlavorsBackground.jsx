import React, { useEffect, useState } from "react";
import apple from "../assets/Apple.png";
import banana from "../assets/Banana.png";
import mango from "../assets/Mango.png";
import orange from "../assets/orange.png";

const flavors = [
  { color: "orange-700", image: orange },
  { color: "red-600", image: apple },
  { color: "orange-500", image: mango },
  { color: "yellow-600", image: banana },
];

export default function FlavorsBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % flavors.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`w-full max-h-screen transition-transform duration-1000 relative bg-transition flex flex-col items-center justify-center`}
      style={{ backgroundColor: `${flavors[current.color]}` }}
    >
      <div>
        <img
          src={flavors[current].image}
          alt=""
          className={`w-auto h-full max-w-[50rem] max-md:w-[25rem] object-contain mx-auto drop-shadow-[15px_20px_30px_black] rotate-[10deg]`}
        />
      </div>
    </main>
  );
}
