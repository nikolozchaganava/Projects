import React from "react";
import shawarma from "./assets/shawarma.png";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <section className="flex w-full justify-center">
        <div className="grid grid-cols-2 justify-between w-full ">
          <div>
            <h1>Best Quality</h1>
          </div>
          <div><h1>Fast Service</h1></div>
          <div></div>
          <div></div>
        </div>
        <img src={shawarma} alt="" className="w-[50%] absolute left-1/2 transform -translate-x-1/2 z-[999]" />
      </section>
    </div>
  );
}