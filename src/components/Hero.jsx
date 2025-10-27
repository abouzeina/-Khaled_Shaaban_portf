

"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-cyan-400/20 blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.1}%`,
            top: `${10 + mousePosition.y * 0.1}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400/15 to-purple-400/15 blur-3xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.05}%`,
            bottom: `${20 + mousePosition.y * 0.08}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '2s'
          }}
        ></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500/30 rotate-45 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-500/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 border-2 border-purple-400/50 rotate-12 animate-spin"></div>
        <div className="absolute bottom-20 right-32 w-5 h-5 bg-gradient-to-r from-purple-500 to-cyan-500 rotate-45 animate-pulse"></div>

        {/* Glowing Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            d="M100,200 Q300,100 500,300 T900,250"
            stroke="url(#glowGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M200,500 Q400,300 600,600 T1000,450"
            stroke="url(#glowGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-purple-200/50 shadow-lg">
              <Sparkles size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700" style={{ fontFamily: "Inter, sans-serif" }}>
                Available for freelance work
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 ">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="block text-gray-900">Graphic</span>
                <span className="block bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent p-1">
                  Designer
                </span>


              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
Freelance Graphic Designer | Branding & Visual Identities & Social Media Design | 2+ years’ experience in building complete brand identities tailored to businesses | Helping brands stand out & grow
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="http://www.behance.net/khsqary2" target="_blank">
                              <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-50"></div>
              </button>
              </a>
              
                 <a href="https://drive.google.com/file/d/1TzI1L_pN7_N-on3eNiP70Eb9feL_BUat/view?usp=sharing" target="_blanck">
                                <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                View CV
              </button>
                 </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent" style={{ fontFamily: "Inter, sans-serif" }}>
                  50+
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent" style={{ fontFamily: "Inter, sans-serif" }}>
                  2
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent" style={{ fontFamily: "Inter, sans-serif" }}>
                  25+
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Designer Photo */}
          <div className="relative mb-6">
            {/* Main Photo Container */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Background Circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500/15 to-purple-500/15 animate-reverse-spin"></div>
              
              {/* Photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://i.ibb.co/tMqsZX9B/image.png"
                  alt="Alexandra - Creative Designer"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-cyan-900/20"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500/40 rotate-45 animate-ping"></div>
            </div>

            {/* Decorative Text */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="px-6 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-purple-200/50 shadow-lg">
                <span className="text-sm font-medium text-purple-700" style={{ fontFamily: "Inter, sans-serif" }}>
                  ✨ Let's create something amazing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </section>
  );
}