import React from "react";
import HeaderNav from "./HeaderNav.jsx";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full p-5 flex justify-center items-center font-poppins text-[#595959] font-[600] space-x-12 bg-white z-[999] fixed max-md:items-start max-md:justify-between max-md:flex-row max-md:max-w-[100vw]">
      <h1 className="uppercase text-2xl font-poppins font-bold text-black tracking-wider max-md:w-[80%]">
        <Link to={"/home"}>Goa (Goal-Oriented Academy)</Link>
      </h1>
      <HeaderNav />
    </header>
  );
}