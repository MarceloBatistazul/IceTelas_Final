import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img src={logo} alt="ICE Telas" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {["inicio", "servicos", "galeria", "depoimentos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 capitalize"
              >
                {item === "inicio" ? "Início" : item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {["inicio", "servicos", "galeria", "depoimentos", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 capitalize text-left"
                >
                  {item === "inicio" ? "Início" : item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
