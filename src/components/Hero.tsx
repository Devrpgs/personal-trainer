import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="home" className="hero-section relative min-h-screen flex items-center py-20 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full animate-pulse delay-700"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Treinamento Personalizado que <span className="text-secondary">Transforma</span> Vidas
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Alcance seus objetivos de fitness com programas personalizados baseados em ciência e anos de experiência
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="btn-primary text-lg group transition-all duration-300 transform hover:scale-105 bg-lime-700 hover:bg-lime-600">
                <span>Agende sua Avaliação Gratuita</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
              <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg" size="lg">
                Conheça Mais
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-secondary/20 animate-pulse"></div>
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Robson Porto, Personal Trainer" className="w-full max-w-md mx-auto rounded-lg shadow-xl relative z-10 border-4 border-white/20 hover:scale-105 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;