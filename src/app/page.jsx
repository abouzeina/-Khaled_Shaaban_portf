import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Header - Premium navigation with glassmorphism */}
      <Header />

      {/* Hero Section - Powerful headline with designer photo and animated background */}
      <Hero />

      {/* About Me - Minimalist icons and elegant description */}
      <About />

      {/* Services - Elegant cards with soft shadows */}
      <Services />

      {/* Portfolio - Gallery with hover effects and grid layout */}
      <Portfolio />

      {/* Testimonials - Rounded profile photos and client feedback */}
      <Testimonials />

      {/* Contact - Glassmorphism contact form */}
      <Contact />

      {/* Footer - Minimal and elegant */}
      <Footer />
    </div>
  );
}