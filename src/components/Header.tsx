import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const Header = ({ onNavigate, activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: "about", label: "Обо мне" },
    { id: "portfolio", label: "Портфолио" },
    { id: "contact", label: "Контакты" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-xl font-bold text-primary"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              DigitalПро
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium px-1 py-2 transition-colors relative ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
            <Button onClick={() => onNavigate("contact")}>Оставить заявку</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-sm p-4">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-sm font-medium py-2 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => {
                onNavigate("contact");
                setIsMenuOpen(false);
              }}
            >
              Оставить заявку
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
