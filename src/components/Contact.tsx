import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Número do WhatsApp (formato: 55 + DDD + número)
    const whatsappNumber = "5516993538817";

    // Mensagem formatada
    const text = `Olá! 👋\nTenho interesse nos serviços da ICE Telas.\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Mensagem:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);

    // Monta a URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Mostra toast de sucesso
    toast.success("Abrindo WhatsApp...");

    // Abre WhatsApp em nova aba
    window.open(whatsappUrl, "_blank");

    // Limpa o formulário
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solicite seu orçamento sem compromisso. Estamos prontos para atendê-lo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(11) 99999-9999"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-6 text-lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-xl shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Cidade de Dumont, SP 14120-000
                  <br />
                  
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Telefone</h3>
                <p className="text-muted-foreground">
                  +55 (16) 99353-8817
                  <br />
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">icetelas@gmail.com</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Horário</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 17h
                  <br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
