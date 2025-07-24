import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Posts", href: "#posts" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-darker/95 backdrop-blur-lg rounded-b-2xl border border-terminal-green-dim border-t-0 shadow-lg shadow-terminal-green/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-terminal-green font-mono group">
            <Terminal className="w-6 h-6 animate-terminal-flicker group-hover:animate-bounce-subtle transition-all duration-300" />
            <span className="text-xl font-bold neon-glow hover:scale-105 transition-transform duration-300">PORTFOLIO.SYS</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-text-dim hover:text-terminal-green transition-all duration-300 font-mono font-medium relative group px-3 py-2 rounded-lg hover:bg-terminal-green/10 hover:scale-105"
              >
                <span className="text-terminal-green opacity-60 group-hover:opacity-100 transition-opacity">[</span>
                <span className="mx-1">{item.label}</span>
                <span className="text-terminal-green opacity-60 group-hover:opacity-100 transition-opacity">]</span>
                <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-terminal-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-xl border border-terminal-green-dim bg-background-darker/50 hover:bg-terminal-green/20 text-terminal-green hover:scale-110 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 rounded-2xl border border-terminal-green-dim bg-background-darker/90 backdrop-blur-lg animate-slide-up">
            <div className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-text-dim hover:text-terminal-green transition-all duration-300 font-mono font-medium py-2 px-3 rounded-lg hover:bg-terminal-green/10 hover:translate-x-2"
                  >
                  <span className="text-terminal-green">&gt; </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};