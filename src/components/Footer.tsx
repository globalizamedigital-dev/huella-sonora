import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-6 col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-brand bg-mint text-white">
                <Music className="h-6 w-6" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-serif text-xl font-bold tracking-tight">Alicia Castro</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-mint">Huella Sonora</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Transformando vidas a través del poder de la música y un enfoque humano de integración social.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Navegación</h4>
            <ul className="space-y-3 text-slate-400 text-sm font-medium">
              <li><Link to="/" className="hover:text-mint transition-colors">Inicio</Link></li>
              <li><Link to="/sobre-mi" className="hover:text-mint transition-colors">Sobre Mí</Link></li>
              <li><Link to="/servicios" className="hover:text-mint transition-colors">Servicios</Link></li>
              <li><Link to="/a-quien-acompano" className="hover:text-mint transition-colors">A quién acompaño</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Contacto</h4>
            <div className="space-y-4 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-mint" />
                <span>Bahía de Cádiz (Presencial)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-mint" />
                <span>660 53 96 06</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-mint" />
                <span>info.musicoterapia.alicia@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/IntegracionMusicoterapiayCanto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl hover:bg-mint hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/5 rounded-xl hover:bg-mint hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-slate-500 italic">
              "Empecemos a crear bienestar a través de la música"
            </p>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center text-slate-500 font-bold text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Alicia Castro | Huella Sonora</p>
        </div>
      </div>
    </footer>
  );
};