import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Varanda residencial com rede de proteção", location: "Apartamento - São Paulo" },
  { src: gallery2, alt: "Janela com rede de proteção", location: "Residência - Zona Sul" },
  { src: gallery3, alt: "Instalação comercial", location: "Prédio Comercial - Centro" },
  { src: gallery4, alt: "Família segura", location: "Apartamento Familiar - Zona Oeste" },
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
