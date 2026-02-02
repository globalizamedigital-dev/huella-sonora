import React from 'react';
import { Building2, UserCircle2, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export const WhoIAccompany: React.FC = () => {
  const entidades = [
    { title: "Asociaciones de mayores activos", desc: "Bienestar, memoria, socialización" },
    { title: "Residencias públicas y privadas", desc: "Estimulación cognitiva y emocional" },
    { title: "Centros de día", desc: "Activación y vínculo grupal" },
    { title: "Asociaciones de Alzheimer y Parkinson", desc: "Memoria, ritmo y emociones" },
    { title: "Asociaciones de personas con discapacidad", desc: "Comunicación, autoestima e inclusión" },
    { title: "Personas en riesgo de exclusión social", desc: "Apoyo emocional y fortalecimiento" },
    { title: "Centros de participación activa", desc: "Mujeres y programas de violencia de género" },
    { title: "Escuelas de Ed. Especial y AMPAs", desc: "Apoyo emocional y comunicación" },
    { title: "Profesionales social/sanitario", desc: "Herramientas musicales aplicadas" },
    { title: "Centros de profesorado", desc: "Formación y talleres aplicables" }
  ];

  const personas = [
    { title: "Padres y madres de hijos con discapacidad", desc: "Apoyo emocional y respiro" },
    { title: "Mujeres a partir de 45 años", desc: "Autocuidado, expresión y empoderamiento" },
    { title: "Hijos/as de padres mayores dependientes", desc: "Gestión del desgaste emocional" },
    { title: "Personas en situación de dependencia", desc: "Bienestar y acompañamiento respetuoso" },
    { title: "Adultos que quieren cantar", desc: "Disfrute, expresión y socialización" }
  ];

  return (
    <section className="py-24 bg-white" id="a-quien-acompano">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mint">Colectivos y personas a las que acompaño</h2>
          <p className="text-body/70 max-w-3xl mx-auto text-lg font-medium">
            Explicación clara de los perfiles y necesidades que trabajo a través de la música.
          </p>
          <div className="w-20 h-1.5 bg-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Entidades */}
          <div className="bg-cream p-10 rounded-brand-lg border border-mint/10 shadow-sm space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-mint text-white rounded-brand shadow-lg"><Building2 className="w-6 h-6" /></div>
              <h3 className="font-serif text-2xl font-bold text-body">Entidades y Profesionales</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {entidades.map((e, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <CheckCircle2 className="w-5 h-5 text-mint shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-body text-sm leading-tight">{e.title}</h4>
                    <p className="text-xs text-body/60 font-medium italic mt-0.5">→ {e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personas */}
          <div className="bg-white p-10 rounded-brand-lg border border-malva/10 shadow-xl space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-malva text-white rounded-brand shadow-lg"><UserCircle2 className="w-6 h-6" /></div>
              <h3 className="font-serif text-2xl font-bold text-body">Personas y Familias</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {personas.map((p, i) => (
                <div key={i} className="flex gap-4 items-start group p-4 rounded-brand bg-cream/30 hover:bg-cream/60 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-malva shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-body text-lg leading-tight">{p.title}</h4>
                    <p className="text-sm text-body/70 font-medium mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Área de Acción */}
        <div className="pt-20 border-t border-cream" id="area-de-accion">
          <div className="text-center mb-12">
            <h3 className="font-serif text-4xl font-bold text-mint">Área de Acción</h3>
            <p className="text-body/70 mt-4 font-medium max-w-2xl mx-auto">
              Ofrezco mis servicios adaptándome a las necesidades de cada persona o colectivo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 bg-cream rounded-brand-lg flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left border border-mint/20 shadow-sm">
              <div className="p-4 bg-mint text-white rounded-full shadow-lg"><MapPin className="w-8 h-8" /></div>
              <div className="space-y-3">
                <h4 className="font-bold text-xl text-body">Presencial – Bahía de Cádiz</h4>
                <p className="text-body/70 text-sm leading-relaxed font-medium">
                  Trabajo en las localidades de: <span className="text-mint font-bold">Cádiz, Jerez de la Frontera, El Puerto de Santa María, San Fernando, Rota, Chiclana y Puerto Real.</span>
                </p>
                <p className="text-xs text-body/50 italic">Ideal para centros, residencias, escuelas y familias locales.</p>
              </div>
            </div>
            
            <div className="p-10 bg-white rounded-brand-lg flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left border border-malva/20 shadow-xl">
              <div className="p-4 bg-malva text-white rounded-full shadow-lg"><Globe className="w-8 h-8" /></div>
              <div className="space-y-3">
                <h4 className="font-bold text-xl text-body">Modalidad Online</h4>
                <ul className="text-body/70 text-sm font-medium space-y-1">
                  <li>• Sesiones individuales y grupales por videoconferencia</li>
                  <li>• Talleres y acompañamiento para profesionales</li>
                  <li>• Flexible y adaptable a cualquier ubicación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};