import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mantemos a altura do header fixa */}
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            {/* Logo maior, sem aumentar a altura do header */}
            <img
              src={logo}
              alt="ICE Telas"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transition-all duration-300 -mt-2"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {["inicio", "servicos", "galeria", "depoimentos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-black hover:text-primary font-medium transition-colors duration-200 capitalize"
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
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
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
                  className="text-black hover:text-primary font-medium transition-colors duration-200 capitalize text-left"
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
