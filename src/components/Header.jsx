"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-purple-100/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <div className="w-5 h-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <img src="https://i.ibb.co/0VpTw7D9/Asset-2-4x.png" />
                </span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-30"></div>
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent" 
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Khaled Shaaban
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a href="https://wa.me/201125195847" target="_blanck">
                          <button className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                    style={{ fontFamily: "Inter, sans-serif" }}>
              Let's Talk
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 blur transition-opacity duration-300 hover:opacity-50"></div>
            </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-xl rounded-xl border border-gray-100 shadow-xl">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors duration-200"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
              <button className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                Let's Talk
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}