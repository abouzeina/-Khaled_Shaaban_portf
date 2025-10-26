"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, MessageCircle, User, Briefcase } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      project: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kh.sqary2@gmail.com",
      href: "mailto:hello@alexandra.design"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+201125195847",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "October, egypt",
      href: "#"
    }
  ];

  const budgetOptions = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+"
  ];

  const projectTypes = [
    "Brand Identity",
    "Web Design",
    "Mobile App",
    "UI/UX Design",
    "Visual Development",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-purple-200/20 to-cyan-200/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 rounded-full bg-gradient-to-r from-cyan-200/15 to-purple-200/15 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rotate-45 opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-40 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-ping"></div>
        
        {/* Glowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="contactGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M50,300 Q200,200 400,350 T700,300"
            stroke="url(#contactGlow)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 text-sm font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Let's Create
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Ready to bring your vision to life? I'd love to hear about your project 
            and discuss how we can work together to create something extraordinary.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - Glassmorphism Style */}
          <div className="lg:col-span-2">
            <div className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                  Tell me about your project
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                        Full Name
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder="Your full name"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder="your@email.com"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company and Budget Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                        Company (Optional)
                      </label>
                      <div className="relative">
                        <Briefcase size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder="Your company name"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Type */}
                  {/* <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                      Project Type
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div> */}

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                      Project Details
                    </label>
                    <div className="relative">
                      <MessageCircle size={20} className="absolute left-3 top-4 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell me more about your project, goals, timeline, and any specific requirements..."
                        style={{ fontFamily: "Inter, sans-serif" }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="block group p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>
                        {info.label}
                      </h4>
                      <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Availability Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
              <h4 className="font-bold text-lg mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                Current Availability
              </h4>
              <p className="text-purple-100 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                I'm currently accepting new projects. Let's discuss your timeline and requirements.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Available for new projects</span>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50">
              <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                Quick Response Promise
              </h4>
              <p className="text-gray-600 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to call or text directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}