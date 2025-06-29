
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-black dot-bg flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-astex-gray/30 to-black opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Availability Badge */}
          <div className={`inline-flex items-center space-x-2 bg-astex-gray/50 border border-green-500/30 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm">Available now, only 3 spots left</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold transition-all duration-1500 ${isLoaded ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-md translate-y-8'}`}>
              <span className="text-primary block">Automation Agency</span>
              <span className="text-white block">
                Beyond 
                <span className="inline-flex items-center mx-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </span>
                Limits.
              </span>
              <span className="text-primary block">Amplified With AI.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`text-xl text-white/70 max-w-2xl mx-auto mb-12 transition-all duration-1500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Design services at your fingertips. Pause or cancel anytime.
          </p>

          {/* CTA Button */}
          <div className={`transition-all duration-1500 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a 
              href="#services" 
              className="btn-primary inline-flex items-center space-x-2 text-lg group"
            >
              <span>Learn More</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Partner Logos */}
          <div className={`mt-24 transition-all duration-1500 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white/50 text-sm mb-8">Our services are featured on</p>
            <div className="flex items-center justify-center space-x-12 opacity-50">
              <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Optimal</span>
              </div>
              <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Zapfast</span>
              </div>
              <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Grapho</span>
              </div>
              <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Signum.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
