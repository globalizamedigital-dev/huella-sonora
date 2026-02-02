import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'A quién acompaño', path: '/a-quien-acompano' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isHome = location.pathname === '/';
  const navColorClass = scrolled || !isHome ? 'text-body' : 'text-white';
  const navBgClass = scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-brand bg-mint text-white shadow-lg group-hover:rotate-12 transition-transform`}>
              <Music className="h-6 w-6" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={`font-serif text-xl font-bold tracking-tight ${navColorClass}`}>
                Alicia Castro
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${scrolled || !isHome ? 'text-mint' : 'text-yellow'}`}>
                Huella Sonora
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-all hover:text-mint ${
                  location.pathname === link.path ? 'text-mint underline underline-offset-8' : navColorClass
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contacto" 
              className="px-6 py-2.5 bg-coral text-white rounded-brand text-sm font-bold shadow-md hover:bg-mint transition-all transform hover:-translate-y-0.5"
            >
              Escríbeme
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={navColorClass}>
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-fade-in border-t border-cream">
          <div className="px-6 py-10 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-xl font-bold text-body hover:text-mint transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-5 bg-coral text-white font-bold rounded-brand text-lg shadow-lg"
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};