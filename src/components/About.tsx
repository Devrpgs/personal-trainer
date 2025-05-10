
import { Badge } from '@/components/ui/badge';

const About = () => {
  const certifications = [
    "CREF 123456-G/SP",
    "Especialização em Hipertrofia",
    "Treinamento Funcional",
    "Nutrição Esportiva",
    "Reabilitação Física"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">Conheça minha trajetória e filosofia de treinamento</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-primary mb-4">Robson Porto</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Com mais de 10 anos de experiência na área de fitness e educação física, 
              dediquei minha carreira a transformar vidas através do treinamento personalizado.
              Formado em Educação Física pela Universidade Federal de São Paulo, 
              especializado em fisiologia do exercício e treinamento de força.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Minha abordagem vai além dos exercícios físicos. Acredito que o verdadeiro 
              treinamento personalizado considera todos os aspectos da vida do cliente: 
              objetivos, limitações, preferências e rotina. Isso me permite criar programas 
              que não apenas trazem resultados, mas que são sustentáveis e agradáveis a longo prazo.
            </p>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Certificações</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20 py-1.5 px-3">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-60 h-60 rounded-full bg-primary/10"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Robson Porto Personal Trainer" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
