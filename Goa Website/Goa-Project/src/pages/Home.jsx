import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";
import HomeBanner from "../components/HomeBanner";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <HomeBanner />
      <div data-aos="fade-up">
        <About />
      </div>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}