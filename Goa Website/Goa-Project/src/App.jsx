import React from "react";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}
