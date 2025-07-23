import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-text-primary to-primary bg-clip-text text-transparent">
          Alex Johnson
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          Creative developer sharing the journey of building beautiful experiences and meaningful connections
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToContent}
          className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
        >
          Explore My Journey
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
      
      {/* Floating Animation Element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6 text-text-secondary" />
      </div>
    </section>
  );
};