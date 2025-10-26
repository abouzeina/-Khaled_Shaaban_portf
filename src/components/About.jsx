import { Palette, Code, Lightbulb, Users, Award, Heart } from "lucide-react";
import "../index.css"

export default function About() {
  const skills = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Crafting cohesive and timeless visual identities that reflect a brand’s story, values, and personality through colors, typography, and consistent design systems."
    },
    {
      icon: Code,
      title: "Logo Design",
      description: "Designing memorable and versatile logos that capture the essence of your brand, ensuring clarity, balance, and strong visual recognition."
    },
    {
      icon: Lightbulb,
      title: "Social Media Design",
      description: "Creating engaging and strategic visuals that boost online presence, maintain brand consistency, and connect meaningfully with your audience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to deliver exceptional results."
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Committed to delivering high-quality work that exceeds expectations."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Passionate about creating meaningful digital experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-200/30 to-cyan-200/30 blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-200/20 to-purple-200/20 blur-2xl"></div>
        
        {/* Abstract Shapes */}
        <svg className="absolute top-40 right-40 w-16 h-16 text-purple-300/40" fill="currentColor">
          <polygon points="8,0 16,8 8,16 0,8" />
        </svg>
        <svg className="absolute bottom-40 left-32 w-12 h-12 text-cyan-300/50" fill="currentColor">
          <circle cx="6" cy="6" r="6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 text-sm font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>
           About Creating Impact
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent p-4 font-black">
              Through Design
            </span>

            <span className="as"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              With over 2 years of experience in graphic design and brand identity, 
              I help businesses communicate their vision through clear, creative, 
              and strategic visuals. My work combines minimal aesthetics with strong 
              storytelling—crafting logos, brand systems, and digital content that build
              trust and make brands stand out.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Personal Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/t9WN63B/p0.png"
                alt="Alexandra working on design projects"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-cyan-900/10"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent" 
                     style={{ fontFamily: "Inter, sans-serif" }}>
                  100%
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>
              My Creative Journey
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
I began my design journey in 2024 with a deep passion for crafting visual stories that connect people with brands. What started as simple logo sketches soon evolved into building full brand identities and digital experiences that inspire trust and recognition.

            </p>
            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>

Through my work with startups, academies, and creative businesses, I’ve learned that design goes far beyond aesthetics — it’s about clarity, purpose, and emotional connection.

Every project I take on is an opportunity to shape how a brand speaks, feels, and grows — turning creativity into real, lasting impact.
            </p>

            {/* Call to Action */}
            <div className="pt-4">
              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                Let's Work Together
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}