import { Badge } from '@/components/ui/badge';
const About = () => {
  const certifications = ["CREF 123456-G/SP", "Especialização em Hipertrofia", "Treinamento Funcional", "Nutrição Esportiva", "Reabilitação Física"];
  return <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-primary/5 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-secondary/5"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">Conheça minha trajetória e filosofia de treinamento</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h3 className="text-3xl font-bold text-primary mb-6">Robson Porto</h3>
            <div className="h-1 w-20 bg-secondary mb-6"></div>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Com mais de 10 anos de experiência na área de fitness e educação física, 
              dediquei minha carreira a transformar vidas através do treinamento personalizado.
              Formado em Educação Física pela Universidade Federal de São Paulo, 
              especializado em fisiologia do exercício e treinamento de força.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Minha abordagem vai além dos exercícios físicos. Acredito que o verdadeiro 
              treinamento personalizado considera todos os aspectos da vida do cliente: 
              objetivos, limitações, preferências e rotina. Isso me permite criar programas 
              que não apenas trazem resultados, mas que são sustentáveis e agradáveis a longo prazo.
            </p>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-primary/90">Certificações e Especializações</h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20 py-2 px-4 text-sm transition-all duration-200 hover:scale-105">
                    {cert}
                  </Badge>)}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-primary/10 transform rotate-3"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-secondary/10 transform -rotate-3"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                <img src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1172&auto=format&fit=crop" alt="Robson Porto Personal Trainer" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 right-10 bg-white p-3 rounded-lg shadow-lg my-0 py-0">
                <p className="text-primary font-bold">+10 anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;