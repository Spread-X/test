import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "https://spread-x.github.io/contact-me" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener noreferrer');
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-lg shadow-elegant-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-primary group">
            <User className="w-6 h-6 group-hover:scale-110 transition-all duration-300" />
            <span className="text-xl font-bold hover:scale-105 transition-transform duration-300">Harsithraja Raja</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-text-secondary hover:text-primary transition-all duration-300 font-medium relative group px-4 py-2 rounded-xl hover:bg-surface-hover hover:scale-105 hover:shadow-elegant"
              >
                {item.label}
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-xl shadow-elegant hover:shadow-elegant-lg hover:scale-110 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 rounded-xl border border-border bg-surface shadow-elegant-lg animate-slide-up">
            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-text-secondary hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-surface-hover hover:translate-x-2 hover:shadow-elegant"
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