import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50 elegant-shadow">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-elegant-light group">
            <div className="w-10 h-10 bg-gradient-to-br from-elegant-purple to-elegant-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold hover:text-elegant-purple-light transition-colors duration-300">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-elegant-gray hover:text-elegant-purple-light transition-all duration-300 font-medium relative group px-4 py-2 rounded-xl hover:bg-elegant-purple/10"
              >
                {item.label}
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-elegant-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-xl bg-card/50 hover:bg-elegant-purple/20 text-elegant-light hover:scale-110 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 rounded-2xl bg-card/90 backdrop-blur-lg animate-slide-up elegant-shadow">
            <div className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-elegant-gray hover:text-elegant-purple-light transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-elegant-purple/10 hover:translate-x-2"
                >
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