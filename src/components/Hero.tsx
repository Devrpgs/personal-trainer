
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center py-20 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Treinamento Personalizado que Transforma Vidas
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Alcance seus objetivos de fitness com programas personalizados baseados em ciência e anos de experiência
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary text-lg" size="lg">
                Agende sua Avaliação Gratuita
              </Button>
              <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg" size="lg">
                Conheça Mais
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-secondary/20 animate-pulse"></div>
              <img 
                src="/placeholder.svg" 
                alt="Robson Porto, Personal Trainer" 
                className="w-full max-w-md mx-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
