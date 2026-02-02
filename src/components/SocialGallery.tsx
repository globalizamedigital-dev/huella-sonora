import React from 'react';
import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SocialGallery: React.FC = () => {
  // Imágenes reales proporcionadas de Facebook
  const galleryItems = [
    {
      url: "/canto_conexion_emocional.jpg",
      caption: "Canto y Conexión Emocional"
    },
    {
      url: "/proyectos_comunitarios.jpg",
      caption: "Proyectos Comunitarios"
    },
    {
      url: "/espacios_voz_salud.jpg",
      caption: "Espacios de Voz y Salud"
    },
    {
      url: "/encuentros_significativos.jpg",
      caption: "Encuentros Significativos"
    },
    {
      url: "/momentos_conexion.jpg",
      caption: "Momentos de Conexión"
    },
    {
      url: "/trabajo_residencias.jpg",
      caption: "Trabajo en Residencias"
    },
  ];

  return (
    <section className="py-24 bg-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl font-bold text-mint mb-6">Nuestra Comunidad</h2>
            <p className="text-body/80 text-xl font-medium leading-relaxed">
              Momentos reales de nuestras sesiones y talleres compartidos en redes sociales. Únete a nuestra huella sonora.
            </p>
          </div>
          <a
            href="https://www.facebook.com/IntegracionMusicoterapiayCanto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-white text-body font-bold rounded-brand border-2 border-mint/20 hover:border-mint hover:bg-mint hover:text-white transition-all shadow-lg group"
          >
            <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Seguir en Facebook</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-brand-lg aspect-video shadow-xl bg-white border-4 border-white">
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <p className="text-white font-serif text-2xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-brand-lg bg-mint text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Facebook className="w-32 h-32" />
          </div>
          <p className="text-2xl md:text-3xl font-serif font-bold mb-6">
            ¿Quieres formar parte de nuestro próximo taller?
          </p>
          <Link
            to="/contacto"
            className="inline-block px-10 py-5 bg-yellow text-slate-900 font-bold rounded-brand hover:bg-white transition-all shadow-xl transform hover:-translate-y-1"
          >
            Reserva tu plaza ahora
          </Link>
        </div>
      </div>
    </section>
  );
};
