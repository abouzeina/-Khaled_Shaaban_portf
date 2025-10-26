"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
{
      id: 1,
      name: "Dr. Ahmed Fouad Ghanem",
      role: "Gastroenterologist, liver and endoscopy doctor",
      company: "Private clinic.",
      image: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/494739259_10235864736780897_7076417067309014628_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHK_3ZMA9xet39-fvYAN3-n1ayPFCc5ZxDVrI8UJzlnELQUD8elkvbErHzrQXJWnYYtxv7kNuVE5M2I8htWSj3r&_nc_ohc=qWdLo47UsvoQ7kNvwFH_nLv&_nc_oc=Adl2_w10uiZ7r-5VxDniW0o_Y5gWO7DsOtaaudVM-vP8-ZW6SzeB1Mwaa2BbvtdqsuI&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=48fAgvySKrOXGek922v0Rw&oh=00_AfdqNsBqnff1LzN7vESeU0xiaEgFksPnTluhfTF4D8x1yw&oe=69044986",
      rating: 5,
      text: "Khaled perfectly captured the spirit of my medical practice. The brand identity he designed was clean, modern, and built exactly around the values I wanted to reflect — trust, care, and professionalism. I’ve received countless compliments from patients ever since we launched the new look."
    },
{

      id: 2,
      name: "Minbar Al-Mansouriyya Team",
      role: "CEO",
      company: "religious volunteer group.",
      image: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/524309882_122101417088955895_8332263092072696804_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEwnpbvqX2pAemT7wdAlXqpY3syYx2wZvpjezJjHbBm-rrGGDFHayryO0G6Z-IAHyd3Qehajy2ktfXdcbSv6NEu&_nc_ohc=M2u7aJNadewQ7kNvwFd4oR2&_nc_oc=AdkKzkCHjypLYaataCI5HRLZGh20YboAqLmqcLkat6clKlpjXUuKwCACezl8LkwK5dI&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=ccTY3G2-IyhhbRSrYT58TA&oh=00_AfdEOIu5Dh49kXtabqBxEct0aPEtYqFFKOnrhrnLcCoHAw&oe=690466DA",
      rating: 5,
      text: "Working with Khaled was a smooth and inspiring experience. He understood the message of our educational mission and transformed it into a beautiful, meaningful visual identity that balances authenticity and modern design. The result truly speaks for itself."
    },
{
      id: 3,
      name: "Dr. Mahmoud Menisi",
      role: "Pediatric surgeon",
      company: "Private clinic.",
      image: "https://i.ibb.co/vvrg71Jq/p4.png",
      rating: 5,
      text: "Exceptional creative direction and attention to detail. Khaled’s design process is clear and collaborative — he listens, advises, and always delivers beyond expectations. The brand identity he built for my project gave it the professional presence it truly deserved."
    },
{
      id: 4,
      name: "Dr. Ahmed Fouad Ghanem",
      role: "Gastroenterologist, liver and endoscopy doctor",
      company: "Private clinic.",
      image: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/494739259_10235864736780897_7076417067309014628_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHK_3ZMA9xet39-fvYAN3-n1ayPFCc5ZxDVrI8UJzlnELQUD8elkvbErHzrQXJWnYYtxv7kNuVE5M2I8htWSj3r&_nc_ohc=qWdLo47UsvoQ7kNvwFH_nLv&_nc_oc=Adl2_w10uiZ7r-5VxDniW0o_Y5gWO7DsOtaaudVM-vP8-ZW6SzeB1Mwaa2BbvtdqsuI&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=48fAgvySKrOXGek922v0Rw&oh=00_AfdqNsBqnff1LzN7vESeU0xiaEgFksPnTluhfTF4D8x1yw&oe=69044986",
      rating: 5,
      text: "I worked with Khaled on managing and designing my social media presence, and the transformation was incredible. The visuals were consistent, elegant, and perfectly aligned with my brand tone. My online engagement and visibility grew noticeably within weeks."
    },
{
      id: 5,
      name: "Fathi Mohamed",
      role: "UI/UX Designer",
      company: "Foursw",
      image: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/511269983_1296708805788632_8741886685617108128_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEMYYCjmNYIgdQeLhXEouoYQIRvidDUxVlAhG-J0NTFWZmsLjxdgD1s2xZ-6kbCEg3vVb9DsXS1B1IIgtKq97FB&_nc_ohc=_M-92x29JbIQ7kNvwF_YQBU&_nc_oc=AdneENisjenT6WQp7IMFZ1VjQdWmcwhoPUuK9sRSfPS4p8B1WzSQ7JQ7ic_1GRDd6fI&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&_nc_gid=HUMWnm0QjN2F4BiDlIr-Ug&oh=00_Afd95zUsDQdntk1S5UxhrtrGlFD5VamYUGebuefFSi_wGQ&oe=6904623E",
      rating: 5,
      text: "I had the pleasure of working with Khaled Shaaban as a Graphic Designer specializing in Branding, Visual Identities, and Social Media Design.Khaled consistently delivers creative, high-quality designs that reflect a deep understanding of brand strategy and visual storytelling.He has exceptional eye for detail, communicates ideas clearly, and always meets deadlines with professionalism.I highly recommend Khaled for any project that requires strong branding expertise and impactful visual design."
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-200/20 to-cyan-200/20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-200/15 to-purple-200/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Decorative Quotes */}
        <div className="absolute top-32 left-32 text-6xl text-purple-200/30 font-serif">"</div>
        <div className="absolute bottom-40 right-40 text-6xl text-cyan-200/30 font-serif transform rotate-180">"</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 text-sm font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            What Clients
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Don't just take my word for it. Here's what some of my amazing clients have to say 
            about working together and the results we achieved.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-100/50 to-transparent rounded-tr-3xl"></div>

            {/* Stars Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 relative z-10" 
                        style={{ fontFamily: "Inter, sans-serif" }}>
              "{testimonials[currentSlide].text}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 blur"></div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                  {testimonials[currentSlide].role} at {testimonials[currentSlide].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:border-purple-200 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:border-purple-200 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Client Logos Row */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Trusted by amazing companies
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Company Logos - Using placeholder colored rectangles */}
            <div className="w-24 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded opacity-50"></div>
            <div className="w-28 h-8 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded opacity-50"></div>
            <div className="w-20 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded opacity-50"></div>
            <div className="w-32 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded opacity-50"></div>
            <div className="w-26 h-8 bg-gradient-to-r from-purple-600 to-cyan-400 rounded opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}