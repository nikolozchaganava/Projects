import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import fullstack from "../assets/fullstack.png";
import interactive from "../assets/interactive.jpeg";
import mentorship from "../assets/mentorship.png";

export default function Services() {
  const servicesList = [
    {
      title: "Fullstack website development course",
      description: "Master the art of creating dynamic websites from scratch.",
      imageSrc: fullstack,
      link: '/pricing'
    },
    {
      title: "Interactive learning activities",
      description: "Enhance your skills through engaging group activities.",
      imageSrc: interactive,
      link: '/work'
    },
    {
      title: "Supportive leadership",
      description: "Benefit from guidance provided by experienced mentors.",
      imageSrc: mentorship,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Element name="services-section" className="w-full h-fit bg-[#EFF1EE]">
      <section className="flex flex-col justify-center py-16 px-4 md:px-[24%] h-fit">
        <div className="mb-10">
          <h3 className="text-md text-green-600 font-semibold uppercase">
            FullStack development
          </h3>
          <h1 className="text-3xl font-semibold">
            Master the art of web creation
          </h1>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-fit">
          {servicesList.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <li className="bg-white w-full h-full shadow-md flex flex-col items-center hover:scale-[1.05] hover:shadow-xl">
                <Link to={service.link}>
                  <img
                    src={service.imageSrc}
                    className="w-full h-48 object-cover"
                    alt={service.title}
                  />
                  <div className="p-5 text-center">
                    <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                    <p className="text-[#595959] text-lg">{service.description}</p>
                  </div>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </Element>
  );
}