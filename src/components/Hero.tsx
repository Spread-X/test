import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, User, Briefcase } from "lucide-react";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="flex items-center justify-center gap-4 mb-8">
          <User className="w-8 h-8 text-primary" />
          <span className="text-text-secondary text-lg font-medium">Portfolio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Alex Johnson
        </h1>
        
        <div className="rounded-2xl border border-border p-8 mb-8 bg-surface/80 backdrop-blur-lg shadow-elegant-lg hover:shadow-elegant-xl hover:bg-surface-hover transition-all duration-500 hover:scale-105 elegant-glow">
          <p className="text-xl md:text-2xl text-text-secondary mb-4 font-medium">
            Creative Developer & Digital Designer
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            Passionate about creating beautiful, functional digital experiences 
            that solve real-world problems through innovative design and technology.
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="icon" className="rounded-xl shadow-elegant hover:shadow-elegant-lg hover:scale-110 transition-all duration-300">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-xl shadow-elegant hover:shadow-elegant-lg hover:scale-110 transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-xl shadow-elegant hover:shadow-elegant-lg hover:scale-110 transition-all duration-300">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToContent}
          className="group rounded-xl px-8 py-4 text-lg font-medium shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-500 hover:scale-105 elegant-glow"
        >
          <Briefcase className="mr-2 w-5 h-5" />
          View My Work
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};