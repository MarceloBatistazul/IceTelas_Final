import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="ICE Telas" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/80 text-sm">
              Especialistas em instalação de redes de proteção com qualidade e segurança para sua
              família.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 text-sm">
            © {new Date().getFullYear()} ICE Telas – Redes de Proteção. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
