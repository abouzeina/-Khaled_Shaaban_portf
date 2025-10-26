import { Brush, Monitor, Smartphone, Zap, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Brush,
      title: "Brand Identity Design",
      description: "Complete brand identity packages including logo design, color palettes, typography, and brand guidelines that capture your brand's essence.",
      features: ["Logo Design", "Brand Guidelines", "Color Psychology", "Typography", "Brand Collateral (cards, packaging, etc.)"],
      price: "Starting at 12,000 EGP",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "Logo Design",
      description: "Designing memorable and versatile logos that capture the essence of your brand, ensuring clarity, balance, and strong visual recognition",
      features: ["Custom Logo Concepts", "Wordmark & Symbol Options", "Color & Typography Variations", "Final Files (AI, PNG, SVG, PDF)","Brand Usage Guide"],
      price: "Starting at 5,000 EGP",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Social Media Design",
      description: "Creating engaging and strategic visuals that boost online presence, maintain brand consistency, and connect meaningfully with your audience.",
      features: ["Social Media Templates", " Post & Story Design", "Highlight & Cover Design", "Monthly Content Packages","Monthly Content Packages"],
      price: "Starting at 3,000 EGP",
      gradient: "from-purple-600 to-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-24 h-24 rounded-full bg-purple-200/20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-32 h-32 rounded-full bg-cyan-200/20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rotate-45 opacity-30"></div>
        <div className="absolute bottom-20 left-40 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 text-sm font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            What I Can Do
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              For You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            I offer comprehensive design and development services to help your brand stand out 
            in the digital landscape. From concept to completion, I ensure every detail aligns 
            with your vision and business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-[1px] rounded-3xl bg-white -z-10"></div>

                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-cyan-500 transition-all duration-300" 
                    style={{ fontFamily: "Inter, sans-serif" }}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600" 
                        style={{ fontFamily: "Inter, sans-serif" }}>
                      <Zap size={14} className="text-purple-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        style={{ fontFamily: "Inter, sans-serif" }}>
                    {service.price}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-medium hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 hover:text-white transition-all duration-300"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                  Get Started
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Floating Decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Need a Custom Solution?
            </h3>
            <p className="text-purple-100 mb-6 max-w-md mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              I offer tailored packages for unique projects. Let's discuss your specific needs and create something amazing together.
            </p>
            <button className="px-8 py-3 rounded-full bg-white text-purple-600 font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{ fontFamily: "Inter, sans-serif" }}>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}