import { useState } from "react";
import { X } from "lucide-react";
import sacada1 from "@/assets/sacada1.jpeg";
import gallery1 from "@/assets/gallery-1.jpg";
import piscina1 from "@/assets/piscina1.jpeg";
import piscina2 from "@/assets/piscina2.jpeg";
import quadra5 from "@/assets/quadra5.jpeg";
import quadra4 from "@/assets/quadra4.jpeg";
import quadra3 from "@/assets/quadra3.jpeg";
import quadra1 from "@/assets/quadra1.jpeg";
import janela1 from "@/assets/janela1.jpeg"
import janela2 from "@/assets/janela2.jpeg" 
import janela3 from "@/assets/janela3.jpeg"
import janela4 from "@/assets/Janela4.jpeg"
import sacadadentro from "@/assets/sacadadtro.jpeg"
import sacadafora from "@/assets/sacadafora.jpeg"


const images = [
  { src: sacada1, alt: "Varanda residencial com rede de proteção", location: "Apartamento - Zona Sul" },
  { src: gallery1, alt: "Janela com rede de proteção", location: "Residência - Zona Sul" },
  { src: janela1, alt: "Janela com rede de proteção instalada", location: "Apartamento Residencial" },
  { src: janela2, alt: "Janela protegida com rede de segurança", location: "Residência Familiar" },
  { src: janela3, alt: "Rede de proteção em janela ampla", location: "Apartamento - Andar Alto" },
  { src: janela4, alt: "Janela com rede de proteção discreta", location: "Condomínio Residencial" },
  { src: sacadadentro, alt: "Sacada com rede de proteção vista interna", location: "Apartamento - Vista Interna" },
  { src: sacadafora, alt: "Sacada com rede de proteção vista externa", location: "Apartamento - Fachada" },
  { src: piscina1, alt: "Instalação comercial com rede de proteção", location: "Prédio Comercial - Centro" },
  { src: piscina2, alt: "Piscina com rede de proteção", location: "Condomínio Residencial - Zona Norte" },
  { src: quadra1, alt: "Quadra esportiva com rede de proteção", location: "Clube Esportivo - Bairro Nobre" },
  { src: quadra3, alt: "Quadra de tênis com rede de proteção", location: "Residência Privada - Zona Oeste" },
  { src: quadra4, alt: "Quadra poliesportiva com rede de proteção", location: "Escola - Centro" },
  { src: quadra5, alt: "Quadra de futebol com rede de proteção", location: "Parque Municipal - Zona Leste" },
];


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nossos Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos realizados com excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img  
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white font-semibold text-lg">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="max-w-5xl w-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {images[selectedImage].location}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
