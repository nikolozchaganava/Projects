import React from "react";
import { Route, Routes } from "react-router";

import Work from "./pages/Work";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/Faq";
import CompleteIntake from "./pages/CompleteIntake";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/work" element={<Work />} />
      <Route path="/news" element={<News />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/intake" element={<CompleteIntake />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
