"use client";

import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ui-ux', label: 'UI/UX' }
  ];

  const projects = [
    {
      id: 1,
      title: "Dr. Ahmed Fouad Ghanem Clinic",
      description: "Complete brand identity design for a gastroenterology and endoscopy clinic, built around trust, professionalism, and a clean medical aesthetic.",
      image: "https://i.ibb.co/27j3V6NY/p2.png",
      tags: ["Brand Identity", "Logo Design", "Medical Branding"],
      liveUrl: "https://www.behance.net/gallery/234224823/Medical-Clinic-Logo-Visual-Identity",
      caseStudyUrl: "https://www.behance.net/gallery/234224823/Medical-Clinic-Logo-Visual-Identity"
    },
    {
      id: 2,
      title: "Miras - Saudi Heritage Brand",
      description: "A comprehensive Saudi brand identity in Arabic calligraphy.The design blends elegance with a modern visual touch to reflect authenticity and sophistication.",
      image: "https://i.ibb.co/DPpq0J5v/p1.png",
      tags: ["Brand Identity", "Arabic Calligraphy", " Fashion Branding"],
      liveUrl: "https://www.behance.net/gallery/236748027/MIRAS-Coffee-Modern-Arabic-Brand-Identity- ",
      caseStudyUrl: "https://www.behance.net/gallery/236748027/MIRAS-Coffee-Modern-Arabic-Brand-Identity- "
    },
    {
      id: 3,
      title: "Minbar Al-Mansouriyya",
      description: "Complete brand identity for an Islamic educational platform dedicated to spreading authentic knowledge through a refined and balanced visual identity.",
      image: "https://i.ibb.co/3ZxnR1r/p3.png",
      tags: ["Brand Identity", "Islamic Design", "Educational Platform"],
      liveUrl: "https://www.behance.net/gallery/225808487/-(-)",
      caseStudyUrl: "https://www.behance.net/gallery/225808487/-(-)"
    },
    {
      id: 4,
      title: "FourSW – Social Media Strategy & Design",
      description: "Comprehensive social media design and content strategy for FourSW, a tech and marketing agency. The project focused on building a consistent visual identity across platforms, highlighting the brand’s expertise in software development, creative design, and digital marketing.",
      image: "https://i.ibb.co/Lzv99BJF/p5.png",
      tags: ["Social Media", "Branding ", "Marketing Design"],
      liveUrl: "https://www.behance.net/gallery/224723765/Social-media-post-designs",
      caseStudyUrl: "https://www.behance.net/gallery/224723765/Social-media-post-designs"
    },
    {
      id: 5,
      title: "A+ Computer Store – Social Media Campaign",
      description: "Creative social media campaign designed and managed for A+ Computer Store under FourSW. The campaign focused on promoting computer accessories and tech products through bold visuals, engaging copy, and a consistent modern aesthetic that strengthened the store’s digital presence.",
      image: "https://i.ibb.co/zhqHDzdK/p7.jpg",
      tags: ["Social Media", " Campaign Design", " Digital Marketing"],
      liveUrl: "https://www.behance.net/gallery/224730271/Social-media-post-designs_2",
      caseStudyUrl: "https://www.behance.net/gallery/224730271/Social-media-post-designs_2"
    },
    {
      id: 6,
      title: "QuranMind Academy – Social Media Design",
      description: "A complete social media design project for QuranMind Academy, focusing on creating inspiring Islamic visuals that blend spirituality with modern design. The campaign aimed to enhance engagement, reflect the academy’s educational values, and maintain a consistent visual identity across platforms.",
      image: "https://i.ibb.co/svXbvtyG/p2.jpg",
      tags: ["Social Media", "Islamic Design", "·Visual Identity"],
      liveUrl: "https://www.behance.net/gallery/224904165/_",
      caseStudyUrl: "https://www.behance.net/gallery/224904165/_"
    },

  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-28 h-28 rounded-full bg-gradient-to-r from-purple-200/20 to-cyan-200/20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-36 h-36 rounded-full bg-gradient-to-r from-cyan-200/15 to-purple-200/15 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-32 right-32 w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rotate-45 opacity-20 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 left-32 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 text-sm font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Featured
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            A collection of my recent work showcasing different aspects of design and development. 
            Each project represents a unique challenge and creative solution.
          </p>

        </div>

        {/* Filter Buttons
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {filter.label}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}


        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a href={project.caseStudyUrl} target="_blank">
                                          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 font-medium hover:bg-white transition-colors"
                            style={{ fontFamily: "Inter, sans-serif" }}>
                      <Eye size={16} />
                      Preview
                    </button>
                    </a>

                  </div>
                </div>

                {/* Project Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-700"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-cyan-500 transition-all duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-200 text-gray-700 font-medium hover:border-purple-500 hover:text-purple-600 transition-colors"
                          style={{ fontFamily: "Inter, sans-serif" }}>
                    <Eye size={16} />
                    Case Study
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                          style={{ fontFamily: "Inter, sans-serif" }}>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* Floating Decoration */}
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Load More / View All */}
        <div className="text-center mt-16">
         <a href="https://www.behance.net/khsqary2" target="_blank">
           <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "Inter, sans-serif" }}>
            View All Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
         </a>
        </div>
      </div>
    </section>
  );
}