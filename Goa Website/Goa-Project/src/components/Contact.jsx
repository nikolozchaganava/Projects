import React, { useEffect } from "react";
import { FaEnvelope, FaMapPin } from "react-icons/fa";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Element name="contact-section" className="bg-gray-100 px-4 md:px-8 lg:px-64 py-12">
      <section className="flex flex-col md:flex-row justify-between" data-aos="fade-up">
        <div className="w-full md:w-[48%]">
          <h2 className="text-green-600 uppercase font-semibold mb-2">Get in Touch</h2>
          <h1 className="text-3xl font-bold mb-4">We're here to help you succeed!</h1>

          <form className="space-y-4">
            <div>
              <label className="block font-semibold">Name *</label>
              <input type="text" placeholder="Jane Smith" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-semibold">Email address *</label>
              <input type="email" placeholder="example@gmail.com" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-semibold">Message</label>
              <textarea rows="4" className="w-full border rounded p-3" placeholder="Write your message here..."></textarea>
            </div>
            <div>
              <input type="checkbox" className="mr-2" id="allow"/>
              <label className="text-sm select-none" for="allow">
                I allow this website to store my submission to respond to my inquiry. *
              </label>
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white uppercase px-6 py-3 rounded font-semibold w-full text-xl transition-all">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-[48%] bg-gray-50 p-6 rounded shadow-md mt-6 md:mt-0">
          <h2 className="font-bold text-xl mb-4">Get in touch</h2>
          <p className="mb-2">
            <a href="mailto:sabawiqarishvilisabawiqara@gmail.com" className="underline text-[#595959] flex items-center font-poppins text-xl gap-3">
              <FaEnvelope /> sabawiqarishvilisabawiqara@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <a href="mailto:nikolozchaganava333@gmail.com" className="underline text-[#595959] text-xl flex items-center gap-3 font-poppins">
              <FaEnvelope /> nikolozchaganava333@gmail.com
            </a>
          </p>
          <p className="font-bold mt-4 mb-2">Location</p>
          <a href="https://www.google.com/maps/place/Tbilisi">
            <p className="text-gray-600 flex items-center gap-3">
              <FaMapPin /> Tbilisi, TB GE
            </p>
          </a>
          <h3 className="font-bold mt-6 mb-2">Hours</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Monday 9:00am – 10:00pm</li>
            <li>Tuesday 9:00am - 10:00pm</li>
            <li>Wednesday 9:00am - 10:00pm</li>
            <li>Thursday 9:00am - 10:00pm</li>
            <li>Friday 9:00am - 10:00pm</li>
            <li>Saturday 9:00am – 6:00pm</li>
            <li>Sunday 9:00am – 12:00pm</li>
          </ul>
        </div>
      </section>
    </Element>
  );
}