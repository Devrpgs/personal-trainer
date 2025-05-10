
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Robson Porto</h3>
            <p className="mb-6">Personal Trainer especializado em transformação física e bem-estar</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-secondary transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Contato</h4>
            <address className="not-italic space-y-2">
              <p>São Paulo, SP - Brasil</p>
              <p>contato@robsonporto.com.br</p>
              <p>(11) 98765-4321</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Robson Porto. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm hover:text-secondary transition-colors">Termos de Serviço</a>
            <a href="#" className="text-sm hover:text-secondary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
