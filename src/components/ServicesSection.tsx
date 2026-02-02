import React from 'react';
import { Music, Users, HeartHandshake, Mic2, Lightbulb, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Musicoterapia individual',
    icon: Music,
    color: 'mint',
    items: ['Gestión emocional y ansiedad', 'Autoestima y autoconocimiento', 'Dificultades emocionales y relacionales', 'Procesos vitales (duelo, cambios, estrés)']
  },
  {
    title: 'Musicoterapia grupal',
    icon: Users,
    color: 'malva',
    items: ['Talleres terapéuticos', 'Canto coral', 'Expresión emocional en grupo', 'Cohesión y socialización']
  },
  {
    title: 'Integración social',
    icon: HeartHandshake,
    color: 'coral',
    items: ['Programas de inclusión', 'Desarrollo de habilidades sociales', 'Intervención socioeducativa en colectivos vulnerables']
  },
  {
    title: 'Talleres y actividades',
    icon: Mic2,
    color: 'yellow',
    items: ['Expresión emocional y creatividad', 'Relajación y bienestar', 'Voz, canto y percusión', 'Para familias y profesionales']
  },
  {
    title: 'Proyectos especiales',
    icon: Lightbulb,
    color: 'mint',
    items: ['Inclusión a través de la música', 'Programas comunitarios y colaborativos', 'Centros educativos y entidades sociales']
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-cream/50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mint">Servicios</h2>
          <p className="text-body/70 max-w-2xl mx-auto text-lg font-medium">
            Musicoterapia e Integración Social con un enfoque profesional, cálido y creativo.
          </p>
          <div className="w-20 h-1.5 bg-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-brand-lg shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-mint/10 flex flex-col h-full">
              <div className={`w-14 h-14 rounded-brand flex items-center justify-center mb-6 
                ${service.color === 'mint' ? 'bg-mint/10 text-mint' : 
                  service.color === 'malva' ? 'bg-malva/10 text-malva' : 
                  service.color === 'coral' ? 'bg-coral/10 text-coral' : 'bg-yellow/10 text-yellow-600'}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-body mb-5">{service.title}</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-body/80 text-sm font-medium">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${service.color === 'mint' ? 'text-mint' : service.color === 'malva' ? 'text-malva' : 'text-coral'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};