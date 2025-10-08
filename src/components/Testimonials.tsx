import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Excelente serviço! Instalaram a rede de proteção em menos de 2 horas. Minha família agora está muito mais segura.",
    rating: 5,
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    text: "Profissionais muito competentes e atenciosos. O material é de primeira qualidade e a instalação foi impecável.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    text: "Recomendo muito! Preço justo, atendimento excelente e a instalação ficou perfeita. Valeu cada centavo.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 block animate-fade-in"
                    : "opacity-0 hidden"
                }`}
              >
                <div className="bg-card p-10 rounded-2xl shadow-elevated">
                  <Quote className="h-12 w-12 text-primary/20 mb-6" />
                  <p className="text-xl text-foreground mb-8 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
