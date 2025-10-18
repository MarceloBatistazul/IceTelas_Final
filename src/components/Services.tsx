import { Home, Wrench, Shield, FileCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Proteção para janelas e varandas e muito mais",
    description: "Instalação profissional de rede de proteção sacadas e áreas externas.",
  },
  {
    icon: Wrench,
    title: "Instalação rápida e segura",
    description: "Garatindo trabalho de qualidade e acabamento execelente.",
  },
  {
    icon: Shield,
    title: "Materiais de alta resistência",
    description: "Redes certificadas com proteção UV e garantia de durabilidade.",
  },
  {
    icon: FileCheck,
    title: "Garantia de qualidade",
    description: "Produtos de altissima qualidade e mão de obra especializada.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em redes de proteção para sua segurança e tranquilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
