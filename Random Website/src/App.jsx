import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedWrapper from './components/AnimatedWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-6">
          <AnimatedWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatedWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
