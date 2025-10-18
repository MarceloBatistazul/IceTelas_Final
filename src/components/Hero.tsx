import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5516993538817", "_blank");
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
      className="relative flex items-center justify-center overflow-hidden min-h-screen"
    >
      {/* Imagem de fundo responsiva */}
      <img
        src={heroBg}
        alt="ICE Telas"
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-75"
      />

      {/* Sobreposição leve para contraste */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center text-white relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] animate-slide-up">
          Proteção com excelência, confiança e qualidade.
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] animate-fade-in">
          Redes de proteção residenciais e comerciais com instalação profissional e materiail de ótima qualidade
        </p>

        {/* Botões */}
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
    </section>
  );
};

export default Hero;
