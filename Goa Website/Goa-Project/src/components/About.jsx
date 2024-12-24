import React from "react";
import { Link } from "react-router";
import { Element } from "react-scroll";
import about from '../assets/about.jpeg'

export default function Services() {
  return (
    <Element name="about-section" className="w-full h-[80%] flex py-36">
      <section className="bg-white w-full font-poppins relative flex justify-center items-center max-md:w-fit gap-28">
        <div className="space-y-1 w-fit max-md:relative max-md:left-1/2 max-md:-translate-x-1/2 max-md:flex max-md:flex-col max-md:items-center">
          <p className="uppercase text-green-600 font-semibold tracking-wide">
            Learn, Connect, Achieve
          </p>
          <h1 className="w-[20ch] text-3xl font-semibold">
            Empowering your web development journey
          </h1>
          <p className="w-[44ch] text-wrap text-[#595959] max-md:w-[50%]">
            At GOA (Goal-Oriented Academy), we offer an immersive Fullstack
            Website Development course designed to transform your skills and
            career. Our unique approach organizes students into collaborative
            squads, each guided by experienced leaders who are dedicated to your
            success. Located in Tbilisi, GE, we foster a vibrant community where
            interactive activities promote teamwork and personal growth. Join us
            and unlock your potential in the world of web development!
          </p>
          <Link className="underline text-[#595959]">Get in touch</Link>
        </div>
        <img src={about} alt="" className="object-cover w-64 h-full transform -scale-[-1.35]"/>
      </section>
    </Element>
  );
}
