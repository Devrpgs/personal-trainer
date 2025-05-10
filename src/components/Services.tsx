
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Users, Calendar, Utensils, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Treinamento Personalizado",
      description: "Sessões individuais adaptadas aos seus objetivos específicos, nível de condicionamento e necessidades.",
      icon: Dumbbell,
      price: "A partir de R$120/sessão",
      bgImage: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1031&auto=format&fit=crop"
    },
    {
      title: "Consultoria Online",
      description: "Acompanhamento à distância com programas de treinamento personalizados e suporte via chat.",
      icon: MessageSquare,
      price: "A partir de R$350/mês",
      bgImage: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=987&auto=format&fit=crop"
    },
    {
      title: "Treinamento em Grupo",
      description: "Sessões para pequenos grupos (2-4 pessoas) com benefícios de custo reduzido e motivação em equipe.",
      icon: Users,
      price: "A partir de R$80/pessoa",
      bgImage: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1050&auto=format&fit=crop"
    },
    {
      title: "Planos Personalizados",
      description: "Programas detalhados para treinar por conta própria com atualizações periódicas.",
      icon: Calendar,
      price: "A partir de R$250/mês",
      bgImage: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1169&auto=format&fit=crop"
    },
    {
      title: "Acompanhamento Nutricional",
      description: "Orientação nutricional personalizada para complementar seu programa de treinamento.",
      icon: Utensils,
      price: "A partir de R$200/consulta",
      bgImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1153&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Serviços</h2>
          <p className="section-subtitle">Conheça os serviços personalizados que ofereço para ajudar você a atingir seus objetivos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="service-card border-t-4 border-t-primary group hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.99)), url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-2 relative z-10">
                  <div className="p-3 rounded-full bg-primary/10 inline-block mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-700 mb-6 text-base min-h-[80px]">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="font-montserrat font-semibold text-primary">{service.price}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Saiba Mais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-50 via-white to-gray-50 p-8 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-6 text-lg">Não encontrou o que procura? Entre em contato para discutirmos uma solução personalizada para você.</p>
            <Button className="btn-primary transition-all duration-300 hover:scale-105 group">
              <span>Entre em Contato</span>
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
