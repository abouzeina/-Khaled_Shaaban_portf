import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* الصفحة الرئيسية فيها كل الأقسام */}
        <Route
          path="/"
          element={
            <div >
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Testimonials />
              <Contact />
            </div>
          }
        />
        {/* الصفحات المنفصلة */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
