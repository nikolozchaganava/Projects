import React, { useState } from "react";

export default function Iphone() {
  const [screen, setScreen] = useState("lock");
  const [input, setInput] = useState("");

  const handleKeyPress = (key) => {
    setInput((prev) => prev + key);
  };

  const unlock = () => {
    if (input === "1234") {
      setScreen("home");
    } else {
      alert("Wrong Passcode");
      setInput("");
    }
  };

  const apps = [
    { name: "Phone", icon: "📞" },
    { name: "Messages", icon: "💬" },
    { name: "Camera", icon: "📷" },
    { name: "Mail", icon: "✉️" },
    { name: "Settings", icon: "⚙️" },
    { name: "Music", icon: "🎵" },
    { name: "Safari", icon: "🌍" },
    { name: "Notes", icon: "📝" },
    { name: "Clock", icon: "⏰" },
    { name: "Photos", icon: "🖼️" },
    { name: "Weather", icon: "☀️" },
    { name: "Calculator", icon: "🧮" },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex flex-col gap-2">
        <div className="w-2 h-12 bg-gray-700 rounded-r"></div>
        <div className="w-2 h-12 bg-gray-700 rounded-r"></div>
      </div>
      <div className="relative bg-black w-[320px] h-[640px] rounded-[40px] border-4 border-gray-800 shadow-xl">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-20 bg-gray-700 rounded-l"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[36px] overflow-hidden">
          {/* Lock Screen */}
          {screen === "lock" && (
            <div className="flex flex-col justify-center items-center h-full text-white">
              <div className="text-2xl font-semibold mb-8">12:45</div>
              <div className="text-lg">Enter Passcode</div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((key) => (
                  <button
                    key={key}
                    className="w-12 h-12 bg-gray-700 rounded-full text-white text-lg flex items-center justify-center hover:bg-gray-600"
                    onClick={() => handleKeyPress(key)}
                  >
                    {key}
                  </button>
                ))}
              </div>
              <button
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={unlock}
              >
                Unlock
              </button>
            </div>
          )}

          {/* Home Screen */}
          {screen === "home" && (
            <div className="overflow-y-scroll h-full">
              <div className="grid grid-cols-3 gap-4 p-6 text-center text-white">
                {apps.map((app) => (
                  <div
                    key={app.name}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center text-2xl">
                      {app.icon}
                    </div>
                    <div className="text-sm">{app.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
