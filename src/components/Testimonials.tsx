
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ana Silva",
      age: 34,
      testimonial: "Treinar com o Robson mudou completamente minha vida. Perdi 15kg em 6 meses e ganhei uma confiança que nunca imaginei ter. A abordagem personalizada e o acompanhamento constante fizeram toda a diferença.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      result: "Perda de 15kg em 6 meses"
    },
    {
      name: "Carlos Mendes",
      age: 42,
      testimonial: "Após uma lesão nas costas, pensei que nunca mais conseguiria treinar normalmente. O programa de reabilitação do Robson não só me recuperou como me deixou mais forte do que antes.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop",
      result: "Recuperação completa de lesão e ganho de força"
    },
    {
      name: "Patrícia Alves",
      age: 28,
      testimonial: "Como atleta amadora, busquei o Robson para melhorar meu desempenho nas corridas. Em 3 meses, bati meu recorde pessoal na meia maratona e melhorei significativamente minha resistência.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      result: "Melhora de 12% no tempo de meia maratona"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">Resultados Reais</h2>
          <p className="section-subtitle">Histórias de transformação dos meus clientes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative flex justify-center items-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full"></div>
            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              className="relative z-10 rounded-lg shadow-xl max-w-md mx-auto object-cover h-96 w-full"
            />
            <div className="bg-secondary text-white py-3 px-6 rounded-full inline-block mt-6 absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              {testimonials[activeTestimonial].result}
            </div>
          </div>

          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{testimonials[activeTestimonial].name}</h3>
                    <p className="text-gray-500">{testimonials[activeTestimonial].age} anos</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "{testimonials[activeTestimonial].testimonial}"
                </blockquote>
                
                <Separator className="my-6" />
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className={`w-3 h-3 p-0 rounded-full ${
                          index === activeTestimonial 
                            ? 'bg-primary' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        onClick={() => setActiveTestimonial(index)}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTestimonial(
                        activeTestimonial === 0 
                          ? testimonials.length - 1 
                          : activeTestimonial - 1
                      )}
                    >
                      Anterior
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTestimonial(
                        activeTestimonial === testimonials.length - 1 
                          ? 0 
                          : activeTestimonial + 1
                      )}
                    >
                      Próximo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h4 className="font-bold text-xl mb-4">Quer fazer parte das próximas histórias de sucesso?</h4>
              <p className="text-gray-600 mb-4">
                O próximo caso de transformação pode ser o seu. Inicie sua jornada hoje.
              </p>
              <Button className="btn-primary">
                Comece Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
