
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Methodology = () => {
  const steps = [
    {
      number: "01",
      title: "Avaliação Inicial",
      description: "Análise completa da sua composição corporal, histórico de saúde, objetivos e preferências para criar a base do seu programa."
    },
    {
      number: "02",
      title: "Planejamento Personalizado",
      description: "Desenvolvimento de um programa exclusivo considerando sua disponibilidade de tempo, acesso a equipamentos e necessidades específicas."
    },
    {
      number: "03",
      title: "Execução e Acompanhamento",
      description: "Treinos supervisionados com técnica perfeita e ajustes constantes para maximizar resultados e evitar lesões."
    },
    {
      number: "04",
      title: "Avaliações Periódicas",
      description: "Monitoramento regular do progresso para adaptar o programa conforme necessário e garantir evolução contínua."
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">Metodologia</h2>
          <p className="section-subtitle">Como trabalhamos juntos para alcançar seus objetivos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Abordagem Baseada em Ciência</h3>
            <p className="text-gray-700">
              Minha metodologia é fundamentada em princípios cientificamente comprovados de fisiologia do exercício, 
              biomecânica e nutrição esportiva. Cada decisão é tomada com base em evidências para maximizar seus resultados.
            </p>
            
            <h3 className="text-2xl font-bold text-primary pt-4">O que me Diferencia</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Programas verdadeiramente personalizados, não templates genéricos</li>
              <li>Acompanhamento contínuo, não apenas durante as sessões</li>
              <li>Abordagem holística considerando treinamento, nutrição e recuperação</li>
              <li>Adaptação constante do programa conforme sua evolução</li>
              <li>Educação sobre os princípios por trás do seu treino</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-primary transition-all hover:shadow-md">
                <CardContent className="p-6 flex">
                  <div className="text-3xl font-bold text-primary/20 mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
