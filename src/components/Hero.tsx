import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, User } from "lucide-react";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-elegant-dark via-elegant-darker to-elegant-dark">
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-elegant-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-elegant-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-elegant-purple to-elegant-blue rounded-2xl flex items-center justify-center elegant-shadow">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-elegant-purple-light to-elegant-blue bg-clip-text text-transparent">
          Alex Johnson
        </h1>
        
        <div className="bg-card/50 backdrop-blur-lg p-8 rounded-3xl mb-8 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 hover:scale-[1.02] border border-border/50">
          <p className="text-xl md:text-2xl text-elegant-light mb-4 font-light">
            Creative Developer & Digital Innovator
          </p>
          <p className="text-lg text-elegant-gray leading-relaxed">
            Crafting beautiful digital experiences with modern technologies and elegant design principles.
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-border/50 bg-card/30 backdrop-blur-lg hover:bg-elegant-purple/20 text-elegant-light hover:text-elegant-purple-light transition-all duration-300 hover:scale-110 elegant-shadow hover:elegant-glow">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-border/50 bg-card/30 backdrop-blur-lg hover:bg-elegant-purple/20 text-elegant-light hover:text-elegant-purple-light transition-all duration-300 hover:scale-110 elegant-shadow hover:elegant-glow">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-border/50 bg-card/30 backdrop-blur-lg hover:bg-elegant-purple/20 text-elegant-light hover:text-elegant-purple-light transition-all duration-300 hover:scale-110 elegant-shadow hover:elegant-glow">
            <Mail className="w-6 h-6" />
          </Button>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToContent}
          className="group bg-gradient-to-r from-elegant-purple to-elegant-blue hover:from-elegant-purple-light hover:to-elegant-blue text-white px-8 py-4 text-lg font-medium rounded-2xl transition-all duration-500 hover:scale-110 elegant-shadow hover:elegant-shadow-hover"
        >
          Explore My Work
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};