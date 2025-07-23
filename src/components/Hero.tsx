import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2 } from "lucide-react";
import hackerHeroImage from "@/assets/hacker-hero-bg.jpg";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      {/* Background Image with Matrix Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${hackerHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background-darker/90 via-background-dark/80 to-background/90" />
      </div>
      
      {/* Scan Lines Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-green/5 to-transparent animate-scan-line pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in font-mono">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Terminal className="w-8 h-8 text-terminal-green animate-terminal-flicker" />
          <span className="text-terminal-green text-lg font-terminal">~/portfolio $</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow text-terminal-green font-terminal">
          <span className="animate-glitch">ALEX_JOHNSON.EXE</span>
        </h1>
        
        <div className="terminal-border p-6 mb-8 bg-background-darker/50 backdrop-blur-sm">
          <p className="text-lg md:text-xl text-text-terminal mb-4 font-mono">
            <span className="text-terminal-green">&gt;</span> Initializing hacker.portfolio...
          </p>
          <p className="text-lg md:text-xl text-text-terminal mb-4 font-mono">
            <span className="text-terminal-green">&gt;</span> Loading creative_developer.module...
          </p>
          <p className="text-lg md:text-xl text-text-terminal font-mono">
            <span className="text-terminal-green">&gt;</span> Ready to showcase digital_experiences.log
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="icon" className="terminal-border bg-background-darker/50 hover:bg-terminal-green/20 text-terminal-green hover:text-matrix-green transition-all duration-300">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="terminal-border bg-background-darker/50 hover:bg-terminal-green/20 text-terminal-green hover:text-matrix-green transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="terminal-border bg-background-darker/50 hover:bg-terminal-green/20 text-terminal-green hover:text-matrix-green transition-all duration-300">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToContent}
          className="group terminal-border bg-terminal-green/20 hover:bg-terminal-green/30 text-terminal-green hover:text-matrix-green px-8 py-3 text-lg font-mono transition-all duration-300 hover:scale-105"
        >
          <Code2 className="mr-2 w-5 h-5" />
          ACCESS_MAINFRAME
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform animate-terminal-flicker" />
        </Button>
      </div>
      
      {/* Terminal Cursor */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-terminal-flicker">
        <span className="text-terminal-green text-2xl font-mono">_</span>
      </div>
    </section>
  );
};