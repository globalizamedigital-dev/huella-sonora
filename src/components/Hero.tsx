import React from 'react';
import { ArrowRight, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const heroImage = "/banner.jpg";

  return (
    <div className="relative h-[95vh] min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Alicia Castro - Musicoterapia"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-slate-900/20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8 animate-fade-up">
        <div className="inline-flex items-center py-2 px-6 rounded-full bg-mint/90 text-white text-sm font-bold tracking-[0.1em] uppercase shadow-xl">
          Bienvenido/a a Huella Sonora
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-2xl">
          Musicoterapia e <br />
          <span className="text-yellow italic">Integración Social</span>
        </h1>

        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-medium drop-shadow-md leading-relaxed">
          Soy <span className="text-yellow font-bold">Alicia Castro</span>, musicoterapeuta e integradora social, y acompaño a personas y colectivos a través de la música para fomentar el bienestar emocional, la expresión y la inclusión.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10">
          <Link
            to="/servicios"
            className="btn-coral w-full sm:w-auto px-10 py-5 rounded-brand shadow-2xl flex items-center justify-center gap-3 text-lg"
          >
            Descubre mis servicios <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contacto"
            className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/25 border border-white/40 text-white font-bold rounded-brand backdrop-blur-md text-lg text-center transition-all"
          >
            Hablemos ahora
          </Link>
        </div>
      </div>
    </div>
  );
};
