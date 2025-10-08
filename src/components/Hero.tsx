import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Proteção com elegância, confiança e qualidade
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in">
            Redes de proteção residenciais e comerciais com instalação profissional e materiais
            certificados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 shadow-elevated"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsApp}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
