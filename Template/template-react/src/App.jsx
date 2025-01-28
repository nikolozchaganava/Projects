import React from 'react'
import { Route, Routes } from "react-router";
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import NotFound from './page/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
