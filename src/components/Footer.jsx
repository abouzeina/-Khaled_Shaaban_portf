import { Heart, Github, Linkedin, Twitter, Instagram, Mail,} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "http://www.behance.net/khsqary2",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/khsqary2",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/kh.sqary1",
      label: "Instagram"
    },
    {
      icon: Mail,
      href: "mailto:kh.sqary2@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-3xl"></div>
        
        {/* Subtle Glowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="footerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q200,50 400,150 T800,100"
            stroke="url(#footerGlow)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
<div className="w-5 h-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  <img src="https://i.ibb.co/0VpTw7D9/Asset-2-4x.png" />
                </span>
              </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-30"></div>
              </div>
              <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" 
                    style={{ fontFamily: "Inter, sans-serif" }}>
                Khaled Shaaban
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md" style={{ fontFamily: "Inter, sans-serif" }}>
Freelance Graphic Designer | Branding & Visual Identities & Social Media Design | 2+ years’ experience in building complete brand identities tailored to businesses | Helping brands stand out & grow
            </p>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                Made with
              </span>
              <Heart size={16} className="text-red-400 fill-current mx-1" />
              <span className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                AHMED ABOUZEINA
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: "Inter, sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: "Inter, sans-serif" }}>
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@alexandra.design"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                kh.sqary2@gmail.com
              </a>
              <a 
                href="tel:+15551234567"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                +201125195847
              </a>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                October, Egypt
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                Stay updated:
              </span>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              © 2025 Khaled Shaaban. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Floating Decoration */}
        <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse opacity-60"></div>
      </div>
    </footer>
  );
}