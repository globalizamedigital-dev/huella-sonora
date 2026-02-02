import React from 'react';
import { Heart, Music, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const profileImage = "https://scontent.fsvq6-1.fna.fbcdn.net/v/t39.30808-6/596807437_1354240816504405_8654919417350460266_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sItnFebf64UQ7kNvwFQoCg4&_nc_oc=AdnfsjaX8iCYckKq83Q_QGhDLJsVX6Kp4I8wQ11w0ONOU8IQGTG2brOeG5lri04P2SHwnYEx25kVPx9O82Sw9EYi&_nc_zt=23&_nc_ht=scontent.fsvq6-1.fna&_nc_gid=mnWhDeFR4uI1Q085z6TJUQ&oh=00_Afozkt0n2YsnH8IfJ6jPYUD_mRkwseSTVOtGHSWAMn_-EQ&oe=697A82F6";

  return (
    <section className="py-24 bg-white" id="sobre-mi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-mint/10 rounded-full blur-3xl"></div>
            <div className="relative group">
              <img 
                src={profileImage} 
                alt="Alicia Castro - Huella Sonora" 
                className="w-full rounded-brand-lg shadow-2xl aspect-[4/5] object-cover ring-8 ring-cream transition-all duration-700" 
              />
              <div className="absolute -bottom-6 -right-6 bg-mint p-8 rounded-brand text-white shadow-2xl border-4 border-white">
                <Music className="w-8 h-8 mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest opacity-90">Alicia Castro</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-mint leading-tight">
                Mi formación, experiencia y motivación
              </h2>
              <div className="h-1.5 w-20 bg-yellow rounded-full"></div>
            </div>

            <div className="space-y-6 text-body/90 text-lg leading-relaxed">
              <p className="text-xl font-bold text-malva italic">
                Enfoque humano y cercano
              </p>
              <p>
                Soy <span className="font-bold text-mint text-xl">Alicia Castro</span>. Creo en la música como herramienta de transformación personal y social. Mi trabajo combina atención individualizada, creatividad y enfoque humano, adaptando cada intervención a las necesidades de quienes acompaño.
              </p>
              <p>
                Como <span className="font-bold">musicoterapeuta e integradora social</span>, facilito espacios seguros y respetuosos donde el sonido se convierte en el puente hacia el bienestar emocional y la inclusión social.
              </p>
              <p>
                Mi trayectoria me ha llevado a trabajar con diversos colectivos, siempre desde la premisa de que **cada persona tiene su propia melodía vital** que merece ser escuchada y potenciada.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-cream rounded-full border border-mint/20">
                <Heart className="w-5 h-5 text-coral" />
                <span className="font-bold text-sm text-body">Atención Personalizada</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-cream rounded-full border border-malva/20">
                <Sparkles className="w-5 h-5 text-malva" />
                <span className="font-bold text-sm text-body">Herramienta Social</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};