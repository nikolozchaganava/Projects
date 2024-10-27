import { useState } from "react";

function App() {
  const inputFields = [
    { type: "text", label: "Username" },
    { type: "password", label: "Password" },
  ];

  return (
    <div className="bg-[#23242a] h-screen flex justify-center items-center font-poppins">
      <div className="relative w-[380px] h-[420px] bg-[#1c1c1c] rounded-lg before-box">
        <form className="absolute inset-1 bg-[#222] px-[50px] py-[40px] rounded-lg z-[2] flex flex-col">
          <h2 className="text-white font-semibold text-center text-[2rem] tracking-wider">
            Login
          </h2>
          {inputFields.map((field, index) => (
            <div key={index} className="relative mt-[35px] w-full">
              <input
                type={field.type}
                required
                className="w-full py-2 px-4 bg-transparent border-b-2 border-gray-500 text-white outline-none focus:border-white transition-all peer"
              />
              <span className="absolute left-4 top-1 text-gray-400 text-sm transform transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-valid:top-[-10px] peer-valid:text-xs">
                {field.label}
              </span>
            </div>
          ))}
          <div className="flex justify-between mt-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-all">Forgot Password?</a>
            <a href="#" className="hover:text-white transition-all">Sign up</a>
          </div>
          <input
            type="submit"
            className="mt-6 py-2 bg-blue-500 text-white font-semibold rounded cursor-pointer hover:bg-blue-600 transition-[.5s]"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}

export default App;