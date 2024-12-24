import React from "react";
import { FiChevronDown } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImage from "../assets/FAQ.jpeg";

const faqs = [
  {
    question: "What is the Fullstack Website Development course?",
    answer:
      "The Fullstack Website Development course at our academy is an immersive program designed to equip students with the skills needed to build dynamic and responsive websites. Covering both front-end and back-end technologies, this course empowers students to create comprehensive web solutions.",
  },
  {
    question: "How are students organized in the academy?",
    answer:
      "At our academy, we prioritize collaboration and community. Students are grouped into squads, each led by a supportive leader who guides them through their educational journey. This structure fosters teamwork, encourages peer learning, and creates a supportive learning environment.",
  },
  {
    question: "What is the focus of the academy's learning environment?",
    answer:
      "Our academy is committed to creating an engaging and interactive learning environment. Our focus is on fostering collaboration and personal growth through various activities. Students participate in group discussions, coding challenges, and hands-on projects to enhance their learning experience.",
  },
];

export default function FAQ() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-full max-md:max-w-[100vw] max-md:absolute max-md:left-1/2   max-md:transform max-md:-translate-x-1/2"
    >
      <Header />
      <div>
        <div className="py-[10%] px-[25%] bg-black bg-opacity-40 space-y-5 max-md:px-0 max-md:text-center">
          <h1 className="text-white text-6xl font-bold w-[15ch]">Your questions answered</h1>
          <h2 className="text-white text-2xl">Discover everything about GOA</h2>
        </div>
        <section className="bg-slate-50 py-20 px-[32%] max-md:px-[10%]">
          <h2 className="text-md text-green-600 font-bold mb-5">
            YOUR QUESTIONS ANSWERED
          </h2>
          <p className="text-black font-semibold text-3xl mb-12">
            Find out more about our courses.
          </p>
          <div className="max-w-2xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:scale-[1.05]">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <FiChevronDown className="text-gray-600" />
                </div>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
