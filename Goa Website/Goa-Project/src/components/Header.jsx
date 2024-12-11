import React from "react";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="w-full p-5 flex justify-center items-center">
      <h1 className="uppercase text-2xl ">Goa(goal-oriented academy)</h1>
      <HeaderNav />
    </header>
  );
}
