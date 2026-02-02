import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle, MapPin, Music } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  if (success) {
    return (
      <div className="py-32 flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-mint text-white rounded-full flex items-center justify-center mb-6 shadow-lg animate-fade-up">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-body mb-4">¡Gracias por contactar!</h2>
        <p className="text-body/70 text-lg max-w-md mx-auto">Te responderé muy pronto para que empecemos a crear bienestar a través de la música.</p>
        <button onClick={() => setSuccess(false)} className="mt-8 text-mint font-bold hover:underline">Volver al formulario</button>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-mint">Contacto</h2>
              <div className="w-20 h-1.5 bg-yellow rounded-full"></div>
            </div>

            <p className="text-body/80 text-2xl font-bold italic leading-relaxed text-malva">
              “Escríbeme y empecemos a crear bienestar a través de la música”
            </p>
            
            <p className="text-body/70 text-lg font-medium">
              Si quieres más información o te interesa iniciar un proceso terapéutico o un proyecto, ponte en contacto conmigo. Estoy aquí para acompañarte.
            </p>

            <div className="space-y-6 bg-cream/50 p-8 rounded-brand-lg border border-mint/10">
              <div className="flex items-center gap-5">
                <div className="p-3 bg-white shadow-md rounded-brand text-mint"><Mail className="w-6 h-6" /></div>
                <div>
                  <p className="text-xs uppercase font-bold text-mint/60 tracking-widest">Email</p>
                  <p className="font-bold text-body">info.musicoterapia.alicia@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-white shadow-md rounded-brand text-coral"><Phone className="w-6 h-6" /></div>
                <div>
                  <p className="text-xs uppercase font-bold text-coral/60 tracking-widest">Teléfono / WhatsApp</p>
                  <p className="font-bold text-body">660 53 96 06</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-white shadow-md rounded-brand text-malva"><MapPin className="w-6 h-6" /></div>
                <div>
                  <p className="text-xs uppercase font-bold text-malva/60 tracking-widest">Ubicación</p>
                  <p className="font-bold text-body">Bahía de Cádiz y Modalidad Online</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/34660539606" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-brand shadow-lg hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-10 rounded-brand-lg shadow-2xl border-4 border-cream relative">
            <div className="absolute -top-6 -right-6 p-4 bg-yellow rounded-brand shadow-lg rotate-12 hidden md:block">
              <Music className="text-body w-8 h-8" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-body/50 uppercase ml-1">Nombre</label>
                <input 
                  required 
                  type="text" 
                  placeholder="¿Cómo te llamas?" 
                  className="w-full px-6 py-4 rounded-brand bg-cream/20 border-2 border-transparent focus:border-mint focus:bg-white focus:ring-0 outline-none transition-all text-body font-medium"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-body/50 uppercase ml-1">Email</label>
                <input 
                  required 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full px-6 py-4 rounded-brand bg-cream/20 border-2 border-transparent focus:border-mint focus:bg-white focus:ring-0 outline-none transition-all text-body font-medium"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-body/50 uppercase ml-1">Mensaje</label>
                <textarea 
                  required 
                  rows={4} 
                  placeholder="¿En qué puedo ayudarte?" 
                  className="w-full px-6 py-4 rounded-brand bg-cream/20 border-2 border-transparent focus:border-mint focus:bg-white focus:ring-0 outline-none transition-all text-body font-medium resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-coral w-full py-5 rounded-brand flex items-center justify-center gap-3 text-lg mt-4"
              >
                {isSubmitting ? 'Enviando...' : <><MessageSquare className="w-5 h-5" /> Enviar Mensaje</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};