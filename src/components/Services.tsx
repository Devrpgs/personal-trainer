
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Users, Calendar, Utensils, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Treinamento Personalizado",
      description: "Sessões individuais adaptadas aos seus objetivos específicos, nível de condicionamento e necessidades.",
      icon: Dumbbell,
      price: "A partir de R$120/sessão"
    },
    {
      title: "Consultoria Online",
      description: "Acompanhamento à distância com programas de treinamento personalizados e suporte via chat.",
      icon: MessageSquare,
      price: "A partir de R$350/mês"
    },
    {
      title: "Treinamento em Grupo",
      description: "Sessões para pequenos grupos (2-4 pessoas) com benefícios de custo reduzido e motivação em equipe.",
      icon: Users,
      price: "A partir de R$80/pessoa"
    },
    {
      title: "Planos Personalizados",
      description: "Programas detalhados para treinar por conta própria com atualizações periódicas.",
      icon: Calendar,
      price: "A partir de R$250/mês"
    },
    {
      title: "Acompanhamento Nutricional",
      description: "Orientação nutricional personalizada para complementar seu programa de treinamento.",
      icon: Utensils,
      price: "A partir de R$200/consulta"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">Serviços</h2>
          <p className="section-subtitle">Conheça os serviços personalizados que ofereço para ajudar você a atingir seus objetivos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="service-card border-t-4 border-t-primary">
                <CardHeader className="pb-2">
                  <Icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-4 min-h-[80px]">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="font-montserrat font-semibold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                      Saiba Mais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Não encontrou o que procura? Entre em contato para discutirmos uma solução personalizada para você.</p>
          <Button className="btn-primary">
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
