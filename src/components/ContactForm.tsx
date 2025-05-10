
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    objective: '',
    timePreference: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      objective: '',
      timePreference: '',
      message: ''
    });
  };

  const objectives = [
    "Perda de peso",
    "Ganho de massa muscular",
    "Melhora do condicionamento",
    "Reabilitação",
    "Treinamento esportivo",
    "Bem-estar geral"
  ];

  const timePreferences = [
    "Manhã (6h - 12h)",
    "Tarde (12h - 18h)",
    "Noite (18h - 22h)",
    "Flexível"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">Agende sua consulta inicial ou tire suas dúvidas</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Vamos começar sua transformação</h3>
            <p className="text-gray-700 mb-8">
              Preencha o formulário para agendar sua consulta inicial gratuita. 
              Neste encontro, discutiremos seus objetivos, avaliaremos seu ponto de partida 
              e delinearemos um plano personalizado para você.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p>(11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>contato@robsonporto.com.br</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h4 className="font-semibold">Horários</h4>
                  <p>Segunda a Sexta: 6h - 22h</p>
                  <p>Sábados: 8h - 14h</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    placeholder="(11) 98765-4321"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="objective">Objetivo Principal</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange('objective', value)} 
                    value={formData.objective}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu objetivo" />
                    </SelectTrigger>
                    <SelectContent>
                      {objectives.map((objective) => (
                        <SelectItem key={objective} value={objective}>
                          {objective}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timePreference">Preferência de Horário</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('timePreference', value)} 
                  value={formData.timePreference}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o horário" />
                  </SelectTrigger>
                  <SelectContent>
                    {timePreferences.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Compartilhe mais detalhes sobre seus objetivos ou faça perguntas"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full btn-primary">
                Agendar Consulta Gratuita
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
